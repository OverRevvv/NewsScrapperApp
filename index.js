const axios = require('axios'); //* Module for put requests on target website
const cheerio = require('cheerio'); //* Module equivalent to JQuery but for Server Side
const express = require('express'); //* Basic backend framework  
const cors = require('cors')
const app = express() //* using express
const port = process.env.PORT|| 3000 //* Basic Port 
const path = require('path');

//* Target websites
const url1 = "https://www.animenewsnetwork.com/";
const url2 = "https://www.hotcars.com/";
const url3 = "https://www.developer-tech.com/";
//* Axios returns promises that's why we're using .then()

app.use(cors()); //* Setting up CORS for Cross Origin Request 

app.get('/animenewsnetwork/data', (req, res) => {
    // console.log("Get Request On /animenewsnetwork has been made")
    axios(url1)
        .then(respone => {
            const html = respone.data; //*Storing the html respone in const html variable
            const $ = cheerio.load(html);//* Cheerio is loading up the html to find the right elements
            let id = 0;
            const articles = [];
            $('div.herald.box.news', html).each(function () {
                const title = $(this).find('div.wrap h3 a').text();
                const link = url1 + $(this).find('a').attr('href');
                const img = url1 + $(this).find('div.thumbnail').attr('data-src');
                const rawImgStyle = $(this).find('div.thumbnail').attr('style');
                const imgStyle = rawImgStyle.replace(`background-position:`, '');
                const datetime = $(this).find('div.byline time').text();
                const topic = $(this).find('span.topics a').text();
                const preview = $(this).find('div.preview').text();
                id++;
                articles.push({
                    title,
                    link,
                    img,
                    imgStyle,
                    datetime,
                    topic,
                    preview,
                    id
                })
            });
            // console.log(articles[0]);
            res.json(articles)
        }).catch(err => console.error(err));
})

app.get('/cars/data', (req, res) => {
    // console.log("Get Request On /cars has been made")
    axios(url2)
        .then(respone => {
            const html = respone.data;
            const $ = cheerio.load(html);
            const articles = [];
            $('div.section-latest-news div.display-card.article', html).each(function () {
                const title = $(this).find('h5.display-card-title a').text();
                const link = "https://www.hotcars.com" + $(this).find('h5.display-card-title a').attr('href');
                const content = $(this).find('p.display-card-excerpt').text();
                const time = $(this).find('time.display-card-date').html();
                const label = $(this).find('div.w-display-card-category a').text();
                const figure = $(this).find('div.bc-img.responsive-img.img-displayCard figure').html();
                articles.push({
                    title,
                    link,
                    content,
                    time,
                    label,
                    figure,
                })
            });
            res.json(articles)
        }).catch(err => console.error(err));
})
app.get('/tech/data', (req, res) => {
    // console.log("Get Request On /tech has been made")
    axios(url3)
        .then(respone => {
            const html = respone.data;
            const $ = cheerio.load(html);
            const articles = [];
            $('article.archive-post section.entry-content', html).each(function () {
                const rawTitle = $(this).find('header.article-header h3').text();
                const title = rawTitle.trim();
                const articleLink = $(this).find('header.article-header a').attr('href')
                const figure = $(this).find('div.image img').attr('src');
                // const figure = rawFigure.trim();
                const content = $(this).find('div.cell.small-12.medium-8.large-6 p').eq(1).text();
                const timeAndTopic = $(this).find('div.content').html();
                articles.push({
                    title,
                    content,
                    timeAndTopic,
                    figure,
                    articleLink
                })
            });
            res.json(articles)
        }).catch(err => console.error(err));
})

//* Serve static files from the `dist` folder
app.use(express.static(path.join(__dirname, "/Client/dist")));

//* Create a route for the index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Client/dist/index.html"));
});

//* Catch-all route for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/Client/dist/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})