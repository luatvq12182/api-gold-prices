const schedule = require("node-schedule");
const { crawler_gold_prices } = require("./crawler");
const { cache } = require("./cache");

schedule.scheduleJob("1 1 */2 * * *", async function () {
    crawler_gold_prices(() => {
        cache.reset();
    });
});
