const mongoose = require("mongoose");

const GoldPriceSchema = new mongoose.Schema(
    {
        brand: {
            // pnj | sjc | btmc | doji | phuquy | mihong | btmh | ngoctham
            type: String,
        },
        type: {
            type: String,
        },
        buy_price: {
            type: Number,
        },
        sell_price: {
            type: Number,
        },
        change_buy: {
            type: Number,
        },
        change_sell: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("GoldPrice", GoldPriceSchema);
