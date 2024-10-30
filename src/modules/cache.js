const Cache = () => {
    let store = {};

    const isExist = (key) => {
        if (key in store) {
            return true;
        } else {
            return false;
        }
    };

    const getKey = (key) => {
        if (key in store) {
            return store[key];
        }
    };

    const setKey = (key, data) => {
        if (!(key in store)) {
            store[key] = data;
        }
    };

    const updateKey = (key, data) => {
        if (key in store) {
            store[key] = data;
            console.log(`Update cache: ${key}`);
        }
    };

    const deleteKey = (key) => {
        if (key in store) {
            delete store[key];
        }
    };

    const reset = () => {
        store = {};
    };

    const getKeys = () => {
        return Object.keys(store);
    };

    return {
        isExist,
        getKey,
        setKey,
        updateKey,
        deleteKey,
        reset,
        getKeys,
    };
};

const cache = Cache();

module.exports = {
    cache,
};
