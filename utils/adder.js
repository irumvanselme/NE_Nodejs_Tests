function add(...items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) sum += parseInt(items[i]);

    return sum;
}

module.exports = {
    add,
};
