const assert = require('assert');
const onet = require('../onet.js');

describe("onet should generate a node of one", () => {
  const netOfOne = onet("net of one");

  console.log(netOfOne.hello());
});