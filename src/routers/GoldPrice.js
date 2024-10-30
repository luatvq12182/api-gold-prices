const express = require("express");
const router = express.Router();
const GoldPriceController = require("../controllers/GoldPrice");

router.post("/", GoldPriceController.createGoldPrice);
router.get("/", GoldPriceController.getAllGoldPrices);
router.get("/:id", GoldPriceController.getGoldPriceById);
router.put("/:id", GoldPriceController.updateGoldPrice);
router.delete("/:id", GoldPriceController.deleteGoldPrice);

module.exports = router;
