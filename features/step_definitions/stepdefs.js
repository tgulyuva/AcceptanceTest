const {Before, After, Given, When, Then } = require("@cucumber/cucumber");
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();


Before(function () {
  driver.get("http://localhost:3000/");
});

After(function () {
  driver.quit();
});

Given('Empty ToDo list', function () {
  var item= driver.findElement(webdriver.By.id('item')).isDisplayed;
  return !item;
});

When('I write {string} to <text box> and click to <add button>', function (string) {
driver.findElement(webdriver.By.id('txtToDo')).sendKeys(string);
driver.findElement(webdriver.By.id('btnAdd')).click();
});
Then('I should see {string} item in ToDo list', function (string) {
var items= driver.findElements(webdriver.By.id('item'));
items.forEach(element => {
  
  if (string ==element.getText()){
    return true;
  }
  return false;
});
});