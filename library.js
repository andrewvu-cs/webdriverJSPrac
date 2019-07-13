let webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;

let chrome = require("selenium-webdriver/chrome");
let path = require("chromedriver").path;

let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

// traverses you to a page
driver.get("https://library-app.firebaseapp.com/");

driver.findElement(By.css('input')).sendKeys("user@email.com");
driver.findElement(By.css('.btn-lg')).click();

driver.findElement(By.css('alert-success')).getText()
    .then(txt => {
        console.log("Alert text: " + txt);
    })