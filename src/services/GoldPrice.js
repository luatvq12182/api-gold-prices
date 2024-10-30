const GoldPrice = require("../models/GoldPrice");
const { cache } = require("../modules/cache");
const { filterGoldPrices } = require("../shared/utils");

exports.createGoldPrice = async (data) => {
    return await GoldPrice.create(data);
};
exports.getAllGoldPrices = async ({ brand, age, location, category, kind }) => {
    const CACHE_KEY = `${brand ?? "_"}${age ?? "_"}${category ?? "_"}${kind ?? "_"}`;

    if (cache.isExist(CACHE_KEY)) {
        return cache.getKey(CACHE_KEY);
    } else {
        const data = await GoldPrice.find({})
            .sort({
                createdAt: -1,
            })
            .limit(100);

        const response = filterGoldPrices(data, { brand, age, category, kind });

        cache.setKey(CACHE_KEY, response);

        return response;
    }
};

exports.getGoldPriceById = async (id) => {
    return await GoldPrice.findById(id);
};

exports.updateGoldPrice = async (id, data) => {
    return await GoldPrice.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteGoldPrice = async (id) => {
    return await GoldPrice.findByIdAndDelete(id);
};
