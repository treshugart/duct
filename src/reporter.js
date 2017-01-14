const indent = (depth, info) =>
  [...Array(depth)].reduce(p => `${p}  `, '') + info;

export const fail = ({ depth, message, name }) => {
  console.info(indent(depth, `✗ ${name}`));
  console.error(indent(depth + 1, message));
}

export const pass = ({ depth, name }) =>
  console.info(indent(depth, `✓ ${name}`));

export const suite = ({ depth, name }) =>
  console.info(indent(depth, name));

export const test = () => {};
