const dotenv = require("dotenv");
const { app } = require("./app");

dotenv.config();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(
        `[${new Date().toString()}] running on http://localhost:${port}`
    );
});
