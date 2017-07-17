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
    return client
      .url("http://webdriver.io")
      .getTitle()
      .then(title => {
        expect(title).toBe("WebdriverIO - WebDriver bindings for Node.js");
      });
  });

  afterEach(() => {
    return client.end();
  });
});
