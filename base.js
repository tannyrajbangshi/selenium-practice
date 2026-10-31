import { Builder } from "selenium-webdriver";

const driver = await new Builder()
    .forBrowser("chrome")
    .build();

try {
    await driver.get("https://www.npmjs.com/");
    console.log("Browser opened successfully!");
    await driver.sleep(5000);
} finally {
    await driver.quit();
}