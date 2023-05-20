const chrome = require("selenium-webdriver/chrome");
const { Builder, By, Key, until } = require("selenium-webdriver");

(async function googleSearch() {
  let browser = process.env.BROWSER;
  if (browser == 'edge') {browser = 'MicrosoftEdge'}
  const host = process.env.HOST || '127.0.0.1';
  const server = `http://${host}:4444`;

  let driver = await new Builder()
    .forBrowser(browser)
    .usingServer(server)
    .build();

  try {
    await driver.get("https://www.google.com/search?q=w");
    
    let firstResult = await driver.wait(
      until.elementLocated(By.css("h3")),
      10000
    );

    console.log(await firstResult.getAttribute("textContent"));
    console.log(await (await driver.getCapabilities()).getBrowserName());
    console.log(await (await driver.getCapabilities()).getBrowserVersion());
  } finally {
    driver.quit();
  }
})();
