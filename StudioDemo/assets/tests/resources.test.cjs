const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const files = fs.readdirSync(root).filter(name => name.endsWith('.html')).concat(
  fs.readdirSync(path.join(root, 'archive')).filter(name => name.endsWith('.html')).map(name => 'archive/' + name));
function check(ref, base, label) {
  if (!ref || /^(?:[a-z]+:|\/\/|#)/i.test(ref) || ref.includes('${')) return;
  const target = decodeURIComponent(ref.split(/[?#]/)[0]);
  assert.ok(fs.existsSync(path.resolve(base, target)), `${label}: missing ${ref}`);
}
test('all HTML scripts, styles, images and links resolve', () => {
  for (const name of files) {
    const source = fs.readFileSync(path.join(root,name),'utf8');
    for (const match of source.matchAll(/\b(?:src|href)=["']([^"']*)["']/g)) check(match[1],path.dirname(path.join(root,name)),name);
    assert.ok(!/<style>|<script>/.test(source), `${name}: inline page code remains`);
  }
});
test('external stylesheet image URLs resolve relative to the stylesheet', () => {
  const folder = path.join(root,'assets/css');
  for (const name of fs.readdirSync(folder)) {
    const source = fs.readFileSync(path.join(folder,name),'utf8');
    for (const match of source.matchAll(/url\(\s*["']?([^"')\s]+)/g)) check(match[1],folder,name);
  }
});
test('literal image references in JavaScript resolve from the HTML entry', () => {
  function walk(folder) {
    for (const entry of fs.readdirSync(folder,{withFileTypes:true})) {
      const file = path.join(folder,entry.name);
      if (entry.isDirectory()) { walk(file); continue; }
      const source = fs.readFileSync(file,'utf8');
      for (const match of source.matchAll(/["'`](assets\/images\/[^"'`\s<>]+)/g)) check(match[1],root,file);
    }
  }
  walk(path.join(root,'assets/js'));
});
