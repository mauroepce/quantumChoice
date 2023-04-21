const {Router} = require('express');
const fs = require("fs");

const pathName = __dirname

const router = Router();

const removeExtension = (fileName) => {
    return fileName.split(".").shift()
}

fs.readdirSync(pathName).filter( fileName => {
    const name = removeExtension(fileName);
    if(name !== "index"){
        router.use(`/${name}`, require(`./${fileName}`))
    }
})

module.exports = router;
