const Express = require("express");
const router = Express.Router();
const { createUser, fetchAllUser ,fetchOneUser} = require("../controllers/userController");

router.post("/create", createUser);
router.get("/fetch", fetchAllUser);
router.get("/fetchOne",fetchOneUser);

module.exports = router;
