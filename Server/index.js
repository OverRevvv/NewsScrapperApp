const axios = require('axios'); //? Module for put requests on target website
const cheerio = require('cheerio'); //? Module equivalent to JQuery but for Server Side
const express = require('express'); //? Basic backend framework  

const app = express() //? using express
const port = 3000 //? Basic Port 

const url1 = "https://www.animenewsnetwork.com/"; //? Target website
//* Axios returns promises that's why we're using .then()


app.get('/animenewsnetwork', (req, res) => {
    axios(url1)
        .then(respone => {
            const html = respone.data; //*Storing the html respone in const html variable
            const $ = cheerio.load(html);//* Cheerio is loading up the html to find the right elements
            const article = [];
            $('div.herald.box.news', html).each(function () {
                const title = $(this).find('div.wrap h3 a').text()
                const link = url1 + $(this).find('a').attr('href');
                const img = url1 + $(this).find('div.thumbnail').attr('data-src');

                article.push({
                    title,
                    link,
                    img
                })
            });
            // console.log(article);
            res.json(article)
        }).catch(err => console.log(err));
})

app.get('/', (req, res) => {
    res.send("You are Nigger")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})