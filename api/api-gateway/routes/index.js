const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH = __dirname;

const removeExtension = (fileName) => {
    return fileName.split(".").shift();
}

fs.readdirSync(PATH).filter((fileName) => {
    const name = removeExtension(fileName);
    if (name !== "index"){
        router.use(`/${name}`, require(`./${fileName}`))
    }
})

module.exports = router;