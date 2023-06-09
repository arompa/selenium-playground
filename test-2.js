const chrome = require("selenium-webdriver/chrome");
const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");

async function googleSearch(browser, capabilities) {
  let driver = await new Builder()
    .forBrowser(browser)
    .usingServer("http://selenium:4444/wd/hub/")
    .withCapabilities(capabilities)
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
};

googleSearch("chrome", Capabilities.chrome().setAcceptInsecureCerts(true));
googleSearch("MicrosoftEdge", Capabilities.edge().setAcceptInsecureCerts(true));
googleSearch("chrome", Capabilities.firefox().setAcceptInsecureCerts(true));
googleSearch("chrome", Capabilities.chrome().setAcceptInsecureCerts(true));
googleSearch("MicrosoftEdge", Capabilities.edge().setAcceptInsecureCerts(true));
googleSearch("chrome", Capabilities.firefox().setAcceptInsecureCerts(true));
googleSearch("firefox", Capabilities.chrome().setAcceptInsecureCerts(true));
googleSearch("MicrosoftEdge", Capabilities.edge().setAcceptInsecureCerts(true));
googleSearch("chrome", Capabilities.firefox().setAcceptInsecureCerts(true));
googleSearch("chrome", Capabilities.chrome().setAcceptInsecureCerts(true));
googleSearch("MicrosoftEdge", Capabilities.edge().setAcceptInsecureCerts(true));
googleSearch("chrome", Capabilities.firefox().setAcceptInsecureCerts(true));
