require("dotenv").config();
const express = require("express");
const GoldPriceRoutes = require("./src/routers/GoldPrice");
const { cache } = require("./src/modules/cache");
const { crawler_gold_prices } = require("./src/modules/crawler");
require("./src/modules/mongodb");
require("./src/modules/schedule");
// require("./crawler");

const PORT = process.env.PORT;

const main = async () => {
    try {
        const app = express();
        app.listen(PORT, () => {
            console.log("Server is running on http://localhost:" + PORT);
        });

        // Middleware
        app.use(express.json());

        app.get("/hello-world", (_req, res) => {
            res.json({
                msg: "Hello world!",
            });
        });

        app.get("/api/cache-data", (_req, res) => {
            res.json(cache.getKeys());
        });

        app.post("/api/crawl_gold_prices", (_req, res) => {
            crawler_gold_prices(() => {
                cache.reset();
                
                res.json({
                    msg: "Crawl done!",
                });
            });
        });

        app.use(
            "/api/gold-prices",
            (req, res, next) => {
                const authKey = req.headers["auth-key"];

                if (!authKey) {
                    res.status(401).json({
                        status: "Missing auth",
                    });
                    return;
                } else {
                    if (authKey !== process.env.AUTH_KEY) {
                        res.status(401).json({
                            status: "OK",
                        });
                        return;
                    } else {
                        next();
                    }
                }
            },
            GoldPriceRoutes
        );
    } catch (error) {
        console.log(error);
    }
};

main();
