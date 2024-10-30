const GoldPriceService = require("../services/GoldPrice");

exports.createGoldPrice = async (req, res) => {
    try {
        const goldPrice = await GoldPriceService.createGoldPrice(req.body);
        res.status(201).json(goldPrice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllGoldPrices = async (req, res) => {
    try {
        const { brand, age, location, category, kind } = req.query;

        const goldPrices = await GoldPriceService.getAllGoldPrices({
            brand,
            age,
            location,
            category,
            kind,
        });

        res.status(200).json(goldPrices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getGoldPriceById = async (req, res) => {
    try {
        const goldPrice = await GoldPriceService.getGoldPriceById(
            req.params.id
        );
        if (!goldPrice) {
            return res.status(404).json({ error: "Gold price not found" });
        }
        res.status(200).json(goldPrice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateGoldPrice = async (req, res) => {
    try {
        const goldPrice = await GoldPriceService.updateGoldPrice(
            req.params.id,
            req.body
        );
        if (!goldPrice) {
            return res.status(404).json({ error: "Gold price not found" });
        }
        res.status(200).json(goldPrice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteGoldPrice = async (req, res) => {
    try {
        const goldPrice = await GoldPriceService.deleteGoldPrice(req.params.id);
        if (!goldPrice) {
            return res.status(404).json({ error: "Gold price not found" });
        }
        res.status(200).json({ message: "Gold price deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
