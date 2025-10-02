const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
    res.send("Himanshu singh");
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "profile.html"));
});

app.listen(port, () => {
    console.log(`server is 5000 http://localhost:${port}`);
});
