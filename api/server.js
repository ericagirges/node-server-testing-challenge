const express = require("express");

const SailorScouts = require("../sailorScouts/sailorScoutsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/sailorScouts", (req, res) => {
    SailorScouts.getAll()
    .then(sailorScouts => {
      res.status(200).json(sailorScouts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;