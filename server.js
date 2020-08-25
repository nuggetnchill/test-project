const axios = require("axios");
const express = require("express");

const db = [];
const getPosts = async () => {
  try {
    const dataRaw = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = dataRaw.data;
    data.map((el) => db.push(el));
  } catch (error) {
    console.error(error);
  }
};

getPosts();
console.log(db);

const app = express();

// CORS Error won't be thrown
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/getPosts", (req, res) => {
  res.send(db);
});

app.listen(3000, () => console.log("listening on port 3000"));
