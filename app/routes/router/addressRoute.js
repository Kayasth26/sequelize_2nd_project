 const express = require("express");
 const router = express();
 const addressController = require("../../controller/addressController");
 const passport = require("passport");
 const addressValidation = require("../../validation/addressValidation");
 const { validation } = require("../../middleware/validator");

 //Add single and multiple address
router.post(
"/multiAddAddress",
passport.authenticate("jwt", { session: false }),
validation.body(addressValidation.addressValid),
addressController.multiAddAddress
)

 //Find all data
 router.get(
"/findAddress",
passport.authenticate("jwt", {session: false}),
addressController.findAddress
);

//update data
router.put(
"/updateAddress/:id",
passport.authenticate("jwt", {session: false}),
addressController.updateAddress
);

//delete data
router.delete(
"/deleteAddress/:id",
passport.authenticate("jwt", { session: false}),
addressController.deleteaddress
);

module.exports = router;