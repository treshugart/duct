function str (v) {
  return JSON.stringify(v);
}

function toss (msg, info) {
  throw new Error(`${msg}${info ? `: ${info}` : ''}`);
}

module.exports.assert = (v, info) => {
  if (!v) {
    toss('assertion failed', info);
  }
}

module.exports.eq = (v1, v2, info) => {
  if (v1 !== v2) {
    toss(`expected ${str(v1)} to *not* equal ${str(v2)}`, info);
  }
}

module.exports.ne = (v1, v2, info) => {
  if (v1 === v2) {
    toss(`expected ${str(v1)} to *not* equal ${str(v2)}`, info);
  }
}
