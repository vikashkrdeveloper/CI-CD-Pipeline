const express = require("express");
const PORT = 5000;
const app = express();
app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
    return;
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}\n http://localhost:${PORT}`);
});