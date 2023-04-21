const {Router} = require("express");
const {register} = require("../controllers/auth");

const router = Router();

router.get("/", register)

module.exports = router;