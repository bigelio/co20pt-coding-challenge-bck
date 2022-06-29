const express = require("express");

const router = express.Router();
router.use("/user", require("./userRouter"));

router.use("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});
module.exports = router;
