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

driver.findElement(By.css('input'))
    .then(el =>{
        console.log("success " + el);
    } );
driver.findElement(By.css('.btn-lg'))
    .then(el => {
        console.log("found the button " + el);
    });
// driver.findElement(By.css('.alert-success'));
driver.findElements(By.css('nav li'))
    .then(array => {
        console.log("Found the elements " + array);
    });

driver.sleep(10000);
// driver.quit();
setTimeout(() => {
    driver.quit();
}, 100);