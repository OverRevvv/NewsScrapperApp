const puppeteer = require('puppeteer') //? Importing the module
const fs = require('fs/promises')//? Async Promises

async function start() {
    //?Creating the browser to surf internet with puppeteer with await that will wait for it
    const browser = await puppeteer.launch();
    //? Creating a new page
    const page = await browser.newPage();
    //? Visting the URL
    await page.goto("https://learnwebcode.github.io/practice-requests/");


    //? Closing the browser
    await browser.close();
}

start()