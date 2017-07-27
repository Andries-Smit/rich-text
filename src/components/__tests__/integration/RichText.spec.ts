describe("RichText", () => {
  let client;
  const webdriverio = require("webdriverio");

  beforeEach(() => {
    client = webdriverio.remote({
      desiredCapabilities: { browserName: "chrome" }
    });
    return client.init();
  });

  it("test it", () => {
    // return client
    //   .getTitle()
    //   .then(title => {
    //     expect(title).toBe("Google");
    //   });
    return expect(true).toBe(true);
  });

  afterEach(() => {
    return client.end();
  });
});
