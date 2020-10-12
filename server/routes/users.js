const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
// app.use("/api/users", usersRouter);


// Première esquisse, à retravailler dès qu'on en a besoin.

router.patch("/:id", function (req, res, next) {
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

module.exports = router;
