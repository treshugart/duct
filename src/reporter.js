const indent = (depth, info) =>
  [...Array(depth)].reduce(p => `${p}  `, '') + info;

module.exports.fail = ({ depth, message, name }) => {
  console.info(indent(depth, `✗ ${name}`));
  console.error(indent(depth + 1, message));
}

module.exports.pass = ({ depth, name }) =>
  console.info(indent(depth, `✓ ${name}`));

module.exports.suite = ({ depth, name }) =>
  console.info(indent(depth, name));

module.exports.test = () => {};
