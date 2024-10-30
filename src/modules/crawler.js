require("dotenv").config();
const axios = require("axios");
const { sleep } = require("../shared/utils");
const { GOLDS_BY_TYPE } = require("../shared/constants");

const createGoldPrice = async (payload) => {
    const PORT = process.env.PORT;

    try {
        await axios.post(
            `http://127.0.0.1:${PORT}/api/gold-prices`,
            {
                brand: payload.source,
                type: payload.type,
                buy_price: payload.buy,
                sell_price: payload.sell,
                change_buy: payload.changeBuy,
                change_sell: payload.changeSell,
            },
            {
                headers: {
                    "auth-key": process.env.AUTH_KEY,
                },
            }
        );
    } catch (error) {
        console.log("Error Create Gold Price", error);
    }
};

const crawler_gold_prices = async (cb) => {
    const URL = "https://exchange.goonus.io/exchange/api/v1/golds?source=";

    for (let i = 0; i < GOLDS_BY_TYPE.length; i++) {
        const type = GOLDS_BY_TYPE[i];

        const res = await axios.get(URL + type);
        const gold_prices = res.data.data;

        for (let i = 0; i < gold_prices.length; i++) {
            const gold_price = gold_prices[i];

            await createGoldPrice(gold_price);

            await sleep(100);

            console.log(`Done: ${i + 1}/${gold_prices.length}`);
        }

        await sleep(1000);
    }

    if (cb) {
        cb();
    }
};

module.exports = {
    crawler_gold_prices,
};
