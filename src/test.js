const { fail, pass, suite, test } = require('./reporter');
const summary = require('./summary');

let deferred = Promise.resolve();
let depth = 0;

export default function test (name, func, opts = { done, reporter }) {
  const tests = [];
  deferred
    .then(() => suite({ depth, name }))
    .then(() => ++depth);
  func(function (name, ...results) {
    deferred
      .then(() => tests.push({ errors, depth, names: suites.concat(name) }));
    deferred = results.reduce((a, b) => a
      .then(() => test({ depth, name }))
      .catch(e => {
        tests[tests.length - 1].errors.push(e.message);
        fail({ depth, message: e.message, name });
      })
      .then(b)
      .then(r => pass({ depth, name })), deferred);
    deferred
      .then(() => --depth);
  });
  deferred
    .then(() => summary(tests));
}
