const express = require("express");
const queueStatsController = require("../controllers/queueStatsController");
const serviceStatsController = require("../controllers/serviceStatsController");
const diskStatsController = require("../controllers/diskStatsController");
const spamStatsController = require("../controllers/spamStatsController");

const router = express.Router();

router.route("/api/v1/queueStats").get(queueStatsController.getAllQueueStats);

router
  .route("/api/v1/serviceStats")
  .get(serviceStatsController.getAllServiceStats);

router.route("/api/v1/diskStats").get(diskStatsController.getAllDiskStats);

router.route("/api/v1/spamStats").get(spamStatsController.getAllSpamStats);

module.exports = router;
