var express = require("express");
var router = express.Router();
const Item = require("../models/Item.js");

//PREFIXED//
//app.use("/api/items", itemsRouter);//

router.get("/", function (req, res, next) {
  Item.find()
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.get("/:id", function (req, res, next) {
  Item.findById(req.params.id)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.post("/", function (req, res, next) {
  Item.create(req.body)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.patch("/:id", function (req, res, next) {
  const updateValues = req.body;
  Item.findByIdAndUpdate(req.params.id, updateValues, { new: true })
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

router.delete("/:id", function (req, res, next) {
  Item.findByIdAndRemove(req.params.id)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((dbErr) => {
      console.log(dbErr);
      res.status(500).json(dbErr);
    });
});

module.exports = router;
