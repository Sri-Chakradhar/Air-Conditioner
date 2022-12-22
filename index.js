const express = require('express');

const index = express();

index.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html");
    console.log("Working");
});