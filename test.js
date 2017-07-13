
// testing code from stack overflow question

const f = (str) => {
  const [first, second] = str.split('.');
  // throws an undefined error
  // (can't find a .next of undefined? -- this may not be related)
}

f('');
f('aaa');
f('aaa.');
f('.aaa');
f('.');
f('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
f('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aa');
f('.....................................................................');

console.log('OK');

