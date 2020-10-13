const express = require("express");
const router = express.Router();
const User = require("../models/User.js");


// Première esquisse, à retravailler dès qu'on en a besoin.

router.patch("/api/users/:id", function (req, res, next) {
  const updateValues = req.body;
  User.findByIdAndUpdate(req.session.currentUser._id, updateValues, {
    new: true,
  })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/profile", function (req, res, next) {
  const updateValues = req.body;
  User.findById(req.session.currentUser._id)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});


router.patch("/profile", function (req, res, next) {
  const updateValues = req.body;
  User.findByIdAndUpdate(req.session.currentUser._id, updateValues, {
    new: true,
  })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/api/users", (req, res, next) => {
  User
    .findById(req.session.currentUser._id)
    .then((dbRes) => {
      res.status(200).json(dbRes)
    })
    .catch((dbErr) => {
      res.status(500).json(dbErr)
    })
});
  

module.exports = router;
