# NewsScrapper

## What is this?
A full stack news scrapper that is scrapping data from multiple target websites and serving that data via a app.
<br>

![news-scrapper-app vercel app_](https://github.com/OverRevvv/NewsScrapperApp/assets/98686837/f6115145-c2f7-4ab9-99bf-4f6cf444f9f3)

<br>

[🔗 LINK : Click Me!!](https://news-scrapper-app.vercel.app/)

<br>

# Tech
- Vue.js
- Vite.js
- Axios.js
- Cheerio.js
- Express.js


## Setup
Make sure to install the dependencies for both frontend and backend.

for backend
```bash
npm install
```
for frontend
```bash
cd client

npm install
```

## Development 

<br>

### How it works
- App is divided into two part frontend and backend.
- Frontend (`client` folder) contains Vue + Vite app for development purpose.
- Backend (`root` folder) is express app which serves the `dist` that is build of frontend app and handles `API` data requests made by frontend Vue SPA.
- Backend express app scrapes data from target websites using Cheerio and Axios and send it directly on frontend when `API` requests are made on endpoints.

<br>

Start the development backend server on http://localhost:3000

```bash
npm run start
```
Start the development Vue + Vite app server on http://localhost:5172

```bash
cd client 

npm run dev
```
build command for frontend Vue + Vite app to update `dist` folder 

```bash
cd client 

vite build
```
