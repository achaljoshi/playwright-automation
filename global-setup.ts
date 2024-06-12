import rimraf from "rimraf";

async function globalSetup(): Promise<void> {
    await new Promise(resolve => {
        rimraf(`./allure-results`, resolve);
        rimraf(`./html-report`, resolve);
        rimraf(`./test-results`, resolve);
        rimraf(`./logs`, resolve);
    });
}
export default globalSetup;