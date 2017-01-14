function str (v) {
  return JSON.stringify(v);
}

function toss (msg, info) {
  throw new Error(`${msg}${info ? `: ${info}` : ''}`);
}

export function assert(v, info) {
  if (!v) {
    toss('assertion failed', info);
  }
}

export function eq (v1, v2, info) {
  if (v1 !== v2) {
    toss(`expected ${str(v1)} to *not* equal ${str(v2)}`, info);
  }
}

export function ne (v1, v2, info) {
  if (v1 === v2) {
    toss(`expected ${str(v1)} to *not* equal ${str(v2)}`, info);
  }
}
