const router = require("express").Router();
const { createOneUser, deleteOneUser, reSeed} = require("../utils/test/testSeed");

router.route("/seed")
  .get(reSeed)
  .post(createOneUser)
  .delete(deleteOneUser)


module.exports = router;
