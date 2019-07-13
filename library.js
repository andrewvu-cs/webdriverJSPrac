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

driver.findElement(By.css('input'));
driver.findElement(By.css('btn-lg')).getText()
    .then(txt => {
        console.log("The text of the button is: " + txt );
    });
driver.findElements(By.css('nav li'));

driver.sleep(10000);
// driver.quit();
setTimeout(() => {
    driver.quit();
}, 100);