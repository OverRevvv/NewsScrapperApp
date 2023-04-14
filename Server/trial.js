const puppeteer = require('puppeteer') //? Importing the module
const fs = require('fs/promises')//? Async Promises

async function start() {
    //?Creating the browser to surf internet with puppeteer with await that will wait for it
    const browser = await puppeteer.launch();
    //? Creating a new page
    const page = await browser.newPage();
    //? Visting the URL
    await page.goto("https://learnwebcode.github.io/practice-requests/");

    //?Taking the screenshot of page in perception of viewport
    // await page.screenshot({path: "amazing.png"})
    //? This can take a screenshot of full page
    // await page.screenshot({path: "amazing.png" fullPage: true})
    //? array to store the fetched names
    const names = await page.evaluate(() => {
        //? This function can be used however we want to manipulate client side javascript
        return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent);
    })

    //? $$eval select the selector and pass it in the function
    const photos = await page.$$eval("img", (imgs) => {
        return imgs.map(x => x.src)
    });
    //? Storing the array in file with \r\n 
    await fs.writeFile("names.txt", names.join("\r\n"));

    await page.click('#clickme')

    //? Fetching the clicked data before the pages can be done to the page and using $eval() to fetch
    const clickedData = await page.$eval("#data", el => el.textContent);
    console.log(clickedData);

    await page.type("#ourfield", "blue");

    await Promise.all([page.click("#ourform button"), page.waitForNavigation()])

    const info = await page.$eval("#message", el => el.textContent)
    console.log(info);


    //? Saving the image from the target website
    for (const photo of photos) {
        //? awating the get image request
        const imaagepage = await page.goto(photo)
        //? Saving the image that we got with the help of split() to fetch the orignal name and buffer()
        //? which puppeteer provides by default 
        await fs.writeFile(photo.split("/").pop(), await imaagepage.buffer())
    }

    //? Closing the browser
    await browser.close();
}

start()