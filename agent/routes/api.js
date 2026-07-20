const express = require("express");
const router = express.Router();

const modemService = require("../services/modem.service");

router.get("/ping", (req, res) => {
  res.json({
    alive: true,
  });
});

router.get("/modem/device-information", async (req, res) => {
  try {
    const data = await modemService.getDeviceInformation();

    res.send(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
