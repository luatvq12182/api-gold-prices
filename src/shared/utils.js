const {
    GOLDS_BY_AGE,
    GOLDS_BY_CATEGORY,
    GOLDS_BY_KIND,
} = require("./constants");

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const pipe =
    (...fns) =>
    (initialValue) =>
        fns.reduce((value, fn) => fn(value), initialValue);

const filterGoldPrices = (data, { brand, age, category, kind }) => {
    const combinedFunction2 = pipe(
        (arr) => {
            if (!!brand) {
                return arr.filter((e) => {
                    return e.brand === brand;
                });
            } else {
                return arr;
            }
        },
        (arr) => {
            if (!!age) {
                return arr.filter((e) => {
                    return (GOLDS_BY_AGE[e.type] || []).includes(+age);
                });
            } else {
                return arr;
            }
        },
        (arr) => {
            if (!!category) {
                return arr.filter((e) => {
                    return +GOLDS_BY_CATEGORY[e.type] === +category;
                });
            } else {
                return arr;
            }
        },
        (arr) => {
            if (!!kind) {
                return arr.filter((e) => {
                    return +GOLDS_BY_KIND[e.type] === +kind;
                });
            } else {
                return arr;
            }
        }
    );

    const filterGoldPrices = combinedFunction2(data);
    const obj = filterGoldPrices.reduce((pre, cr) => {
        if (!pre[cr.type]) {
            return {
                ...pre,
                [cr.type]: cr,
            };
        } else {
            return pre;
        }
    }, {});

    return Object.values(obj);
};

module.exports = {
    sleep,
    filterGoldPrices,
};
