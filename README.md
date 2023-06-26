# NewsScrapper

## What is this?
A full stack news scrapper that is scrapping data from multiple target websites and serving that data via a app.

# Tech
- Vue.js
- Vite.js
- Axios.js
- Cheerio.js
- Express.js

<!-- ![drifto](https://media.tenor.com/KztJoFknRqQAAAAd/ryosuke-takumi.gif) -->
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
