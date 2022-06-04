module.exports = {
    logger(message) {
        console.log(`[${new Date().toLocaleString()}]: ${message}`);
    },
};
