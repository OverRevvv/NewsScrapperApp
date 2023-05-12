const axios = require('axios'); //? Module for put requests on target website
const cheerio = require('cheerio'); //? Module equivalent to JQuery but for Server Side
const express = require('express'); //? Basic backend framework  
const cors = require('cors')
const app = express() //? using express
const port = 3000 //? Basic Port 

const url1 = "https://www.animenewsnetwork.com/"; //? Target website
//* Axios returns promises that's why we're using .then()

app.use(cors()); //* Setting up CORS for Cross Origin Request 

app.get('/animenewsnetwork', (req, res) => {
    axios(url1)
        .then(respone => {
            const html = respone.data; //*Storing the html respone in const html variable
            const $ = cheerio.load(html);//* Cheerio is loading up the html to find the right elements
            const articles = [];
            $('div.herald.box.news', html).each(function () {
                const title = $(this).find('div.wrap h3 a').text();
                const link = url1 + $(this).find('a').attr('href');
                const img = url1 + $(this).find('div.thumbnail').attr('data-src');
                const rawImgStyle = url1 + $(this).find('div.thumbnail').attr('style');
                const imgStyle = rawImgStyle.replace(`https://www.animenewsnetwork.com/background-position:`, '');
                const rawDT = url1 + $(this).find('div.byline time').text();
                const datetime = rawDT.replace(`https://www.animenewsnetwork.com/`, '');
                const rawTopic = url1 + $(this).find('span.topics a').text();
                const topic = rawTopic.replace(`https://www.animenewsnetwork.com/`, '');
                const rawPV = url1 + $(this).find('div.preview').text();
                const preview = rawPV.replace(`https://www.animenewsnetwork.com/`, '');
                articles.push({
                    title,
                    link,
                    img,
                    imgStyle,
                    datetime,
                    topic,
                    preview
                })
            });
            // console.log(articles[0]);
            res.json(articles)
        }).catch(err => console.error(err));
})

app.get('/', (req, res) => {
    res.send("You are Nigger")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})