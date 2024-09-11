/** FEEDBACK: Great job! */
//1. import express

const express = require("express");
const path = require("path");
const app = express();
const pathToDist = path.join(__dirname, "../vite-project/dist");
const serveStatic = express.static(pathToDist);

const homePage = (req, res, nxt) => {
  const { name, favoriteColor: fc } = req.query;
  res.send(`Hello ${name} your fav color is ${fc}`);
};

app.use(serveStatic);

const port = 1010;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));

/*

2. import path

3. define path to dist folder

4. define port
5. add listener




*/
