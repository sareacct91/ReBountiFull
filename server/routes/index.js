const router = require("express").Router();
const { createOneUser, deleteOneUser, reSeed} = require("../utils/test/testSeed");

router.route("/seed")
  .post(createOneUser)
  .patch(reSeed)
  .delete(deleteOneUser)


module.exports = router;
