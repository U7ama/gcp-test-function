const sinon = require("sinon");
const assert = require("assert");
// require("../");

const getMocks = () => {
  const req = { body: {}, query: {} };

  return {
    req: req,
    res: {
      send: sinon.stub().returnsThis(),
    },
  };
};

it("helloHttp: should print a name", () => {
  const mocks = getMocks();

  const helloHttp = getFunction("helloHttp");
  helloHttp(mocks.req, mocks.res);

  assert.strictEqual(mocks.res.send.calledOnceWith("Hello World!"), true);
});
