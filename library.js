// let webdriver = require("selenium-webdriver"),
//     By = webdriver.By,
//     until = webdriver.until;

// let chrome = require("selenium-webdriver/chrome");
// let path = require("chromedriver").path;

// let service = new chrome.ServiceBuilder(path).build();
// chrome.setDefaultService(service);

// let driver = new webdriver.Builder()
//   .withCapabilities(webdriver.Capabilities.chrome())
//   .build();

// // traverses you to a page
// driver.get("https://library-app.firebaseapp.com/");
// driver.manage().setTimeouts({implicit: (10000)});

// driver.findElement(By.css('input')).sendKeys("user@email.com");
// driver.findElement(By.css('.btn-lg')).click();

// driver.findElement(By.css('alert-success')).getText()
//     .then(txt => {
//         console.log("Alert text: " + txt);
//     });

const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {

  const chrome = require("selenium-webdriver/chrome");
  const path = require("chromedriver").path;

  const service = new chrome.ServiceBuilder(path).build();
  chrome.setDefaultService(service);

  const driver = await new Builder().forBrowser('chrome').build();
//   let driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .build();
  try {
    await driver.get('https://library-app.firebaseapp.com/');
    await driver.findElement(By.css('input')).sendKeys('user@user.com');
    await driver.findElement(By.css('.btn-lg')).click()
    //Explicit wait
    await driver.wait(until.elementLocated({css: '.alert-success'}), 10000);
    await driver.findElement({css: '.alert-success'}).getText()
        .then(txt => {
            console.log(txt);
        })
    // await driver.findElement(By.css('.alert-success')).getText()
    //     .then(txt => {
    //         console.log(txt);
    //     })
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    console.log("blah :D");
  } 
  finally {
      console.log("hi");
    await driver.quit();
  }
})();