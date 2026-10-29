const express = require("express");
const app = express();
const videos = [
  { id: 1, title: "Introduction to Docker", duration: "10 min" },
  { id: 2, title: "Microservices with Node.js", duration: "15 min" }
];

app.get("/videos", (req, res) => res.json(videos));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(3001, "0.0.0.0", () => console.log("Video Service: 3001"));