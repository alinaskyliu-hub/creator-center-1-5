const {test} = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../js/account-transitions.js'), 'utf8');
function setup(reduced = false) {
  const events = {}, calls = [], classes = new Set();
  function element(height) {
    return {style:{height:''}, inert:false, children:[],
      classList:{add:v=>classes.add(v),remove:v=>classes.delete(v)},
      getBoundingClientRect:()=>({height,top:100}),
      animate(frames,options) {
        let resolve, reject;
        const finished = new Promise((a,b)=>{resolve=a;reject=b;});
        const animation = {finished, finish:resolve, cancel:()=>reject(new Error('cancelled'))};
        calls.push({element:this,frames,options,animation});
        return animation;
      }};
  }
  let modal = element(300); modal.children = [element(20),element(280)];
  const old = modal, group = element(500), slogan = element(100);
  const preference = {matches:reduced,addEventListener:(n,fn)=>events.motion=fn};
  const window = {addEventListener:(n,fn)=>events[n]=fn};
  vm.runInNewContext(source,{window,matchMedia:()=>preference,getComputedStyle:()=>({opacity:'1'}),
    document:{querySelector:s=>s.includes('#account-view')?modal:s==='.welcome-content'?group:slogan}});
  return {api:window.AccountTransitions,events,calls,classes,old,preference,
    replace(){modal=element(500);modal.children=[element(20),element(480)];},
    get modal(){return modal;}};
}
const flush = async()=>{await Promise.resolve();await Promise.resolve();await Promise.resolve();};
test('height morph finishes at natural size and restores outgoing interaction',async()=>{
  const s=setup();let commits=0;
  s.api.run(()=>{commits++;s.replace();});
  assert.equal(s.old.inert,true);assert.equal(commits,0);
  s.calls.slice().forEach(c=>c.animation.finish());await flush();
  assert.equal(commits,1);assert.equal(s.old.inert,false);assert.equal(s.old.style.height,'');
  const height=s.calls.find(c=>c.frames[0].height);
  assert.equal(height.frames[0].height,'300px');assert.equal(height.frames[1].height,'500px');
  height.animation.finish();await flush();assert.equal(s.classes.size,0);
});
test('rapid navigation commits only the latest request',async()=>{
  const s=setup();const commits=[];
  s.api.run(()=>commits.push('old'));
  s.api.run(()=>commits.push('latest'));
  s.calls.forEach(c=>c.animation.finish());await flush();
  assert.deepEqual(commits,['latest']);s.api.cancel();await flush();
  assert.equal(s.old.inert,false);assert.equal(s.old.style.height,'');
});
test('resize settles a pending route once without animation',async()=>{
  const s=setup();let commits=0;s.api.run(()=>{commits++;s.replace();});
  s.events.resize();s.calls.forEach(c=>c.animation.finish());await flush();
  assert.equal(commits,1);assert.equal(s.classes.size,0);assert.equal(s.old.inert,false);
});
test('reduced motion navigates immediately',()=>{
  const s=setup(true);let commits=0;s.api.run(()=>commits++);
  assert.equal(commits,1);assert.equal(s.calls.length,0);
});
