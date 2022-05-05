const express = require("express");
const router = express();
const { upload } = require("../../service/multer");
const userContoller = require("../../controller/userController");
const userValidation = require("../../validation/userValidation");
const passport = require("passport");
const { validation } = require("../../middleware/validator");

//Registration
router.post(
"/register",
upload.single("uploadImage"),
// validation.body(userValidation.register),
userContoller.register
);

// login
router.post(
"/login",
validation.body(userValidation. login),
userContoller.login
);

//view profile
router.get(
"/viewProfile/:id",
userContoller.viewProfile
);

//update profile
router.put(
"/updateProfile/:id",
upload.single("uploadImage"),
// validation.body(userValidation.editProfile),
userContoller.updateProfile
);

module.exports = router;