const express = require("express");
const mgController = require(`${__dirname}/../controllers/mgController`);

const router = express.Router();

router.route("/all-gods").get(mgController.getAllGods);
router.route("/god").get(mgController.getGodByName);

module.exports = router;
