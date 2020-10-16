const express = require("express");

const SailorScouts = require("./sailorScoutsModel");

const router = express.Router();

// GET project by id
router.get("/:id", (req, res) => {
  SailorScouts.getAll(req.params.id)
    .then((sailorScout) => {
      if (sailorScout) {
        res.status(200).json(sailorScout);
      } else {
        res.status(404).json({ message: "Sailor Scout not found." });
      }
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      res.status(500).json({ message: "Error retrieving sailorScout." });
    });
});

// DELETE sailorScout by id
router.delete("/:id", (req, res) => {
  SailorScouts.remove(req.params.id)
    .then((count) => {
      if (count > 0) {
        res.status(200).json({ message: "The sailorScout has been deleted." });
      } else {
        res.status(404).json({ message: "The sailorScout cold not be found." });
      }
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      res.status(500).json({ message: "Error deleting the sailorScout." });
    });
});


// POST sailorScout
router.post("/", (req, res) => {
  SailorScouts.add(req.body)
    .then((sailorScout) => {
      res.status(201).json(sailorScout);
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      res.status(500).json({ message: "Error adding a sailorScout." });
    });
});

// PUT sailorScout by id
router.put("/:id", (req, res) => {
  SailorScouts.update(req.params.id, req.body)
    .then((sailorScout) => {
      if (sailorScout) {
        res.status(200).json(sailorScout);
      } else {
        res.status(404).json({ message: "The sailorScout could not be found." });
      }
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      res.status(500).json({ message: "Error updating project." });
    });
});

module.exports = router;
