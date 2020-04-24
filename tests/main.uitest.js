const path = require("path");

describe("main testsuite", () => {
  it("repro the bug", () => {
    browser.url("https://www.google.com");
    browser.execute(() => console.error("heya!"));
    console.log(browser.getLogs("browser"));
  });
});
