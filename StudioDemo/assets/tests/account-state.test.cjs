const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'../..');
const source=fs.readFileSync(path.join(root,'assets/js/account-state.js'),'utf8');
const legacy=fs.readFileSync(path.join(root,'archive/linked-redirect.js'),'utf8');
function setup(url){
 const window={},document={documentElement:{dataset:{}}};
 vm.runInNewContext(source,{window,document,location:{href:url},URL});
 return {state:window.StudioAccount,document};
}
test('linked state is URL-specific, with ordinary pages unlinked by default',()=>{
 const a=setup('https://example.test/StudioDemo/content.html?linked=1');
 const b=setup('https://example.test/StudioDemo/content.html');
 assert.equal(a.state.linked,true);assert.equal(b.state.linked,false);
 assert.equal(a.document.documentElement.dataset.accountState,'linked');
 assert.equal(a.state.href('analytics.html'),'analytics.html?linked=1');
 assert.equal(b.state.href('analytics.html'),'analytics.html');
});
test('navigation preserves editing parameters and hashes on HTTP and file URLs',()=>{
 for(const base of ['https://example.test/StudioDemo/','file:///local/StudioDemo/']){
  const {state}=setup(base+'edit.html?linked=1');
  const url=new URL(state.href('edit2.html?contentId=VID-1&type=short&episode=3#preview'),base);
  assert.equal(url.searchParams.get('linked'),'1');assert.equal(url.searchParams.get('contentId'),'VID-1');
  assert.equal(url.searchParams.get('episode'),'3');assert.equal(url.hash,'#preview');
  assert.equal(state.href('../account_aurora/index.html#/login'),'../account_aurora/index.html#/login');
  assert.equal(state.href('https://elsewhere.test/content.html'),'https://elsewhere.test/content.html');
  assert.equal(state.href('content.html?linked=1&sort=new#list',false),'content.html?sort=new#list');
 }
});
test('all six archived entry points retain query/hash and force linked state',()=>{
 for(const name of ['index','content','analytics','account-setting','edit','edit2']){
  let target;
  vm.runInNewContext(legacy,{URL,location:{href:`file:///local/StudioDemo/archive/${name}-linked.html?contentId=42&episode=2&accountEntry=1#preview`,replace:url=>target=new URL(url)}});
  assert.equal(target.pathname,`/local/StudioDemo/${name}.html`);
  assert.equal(target.searchParams.get('linked'),'1');assert.equal(target.searchParams.get('accountEntry'),'1');
  assert.equal(target.searchParams.get('contentId'),'42');assert.equal(target.hash,'#preview');
  const html=fs.readFileSync(path.join(root,'archive',name+'-linked.html'),'utf8');
  assert.ok(html.includes('linked-redirect.js'));assert.ok(!html.includes('class="sidebar"'));
 }
});
