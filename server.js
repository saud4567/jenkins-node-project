const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello! Jenkins CI/CD + Docker is working.");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
