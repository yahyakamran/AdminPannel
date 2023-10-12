const Express = require("express");
const router = Express.Router();
const { createUser, fetchUser } = require("../controllers/userController");

router.get("/create", createUser);
router.get("/fetch", fetchUser);

module.exports = router;
