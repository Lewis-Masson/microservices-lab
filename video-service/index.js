const express = require("express");
const app = express();
const videos = [
  { id: 1, title: "Introduction to Docker" },
  { id: 2, title: "Microservices with Node.js" }
];

app.get("/videos", (req, res) => res.json(videos));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(3001, "0.0.0.0", () => console.log("Video Service: 3001"));