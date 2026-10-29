const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

const userURL = process.env.USER_SERVICE_URL || "http://localhost:3000";
const videoURL = process.env.VIDEO_SERVICE_URL || "http://localhost:3001";

app.get("/api/users", async (req, res) => {
  try {
    res.json((await axios.get(`${userURL}/users`)).data);
  } catch (err) {
    console.error(err.message);
    res.status(502).json({ error: "Users unavailable" });
  }
});

app.get("/api/videos", async (req, res) => {
  try {
    res.json((await axios.get(`${videoURL}/videos`)).data);
  } catch (err) {
    console.error(err.message);
    res.status(502).json({ error: "Videos unavailable" });
  }
});

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(3002, "0.0.0.0", () => console.log("Gateway: 3002"));