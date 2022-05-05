const db = require("../models/sequelizeconnect");
const User = db.users;
const bcrypt = require("bcrypt");
const { GeneralError } = require("../utils/error");
const { GeneralResponse } = require("../utils/response");
const config = require("../utils/config");
const logger = require("../logger/logger");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.register = async (req, res, next) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({where: { email: email} });

        if(user) {
          next(
              new GeneralError(
                  "User Already Register",
                  undefined,
                  config.HTTP_ACCEPTED
              )
          );
    } else {
        const bcryptPassword = await bcrypt.hash(req.body.password, saltRounds);
        const data = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            password: bcryptPassword,
            uploadImage: req.file.filename,
        };
        await User.create(data);
        await next(
            new GeneralResponse("Register Successfully", data, config.HTTP_CREATED)
            );
        }
    } catch (err) {
        logger.error(err);
        console.log(err);
        next(new GeneralError("Somwthing Wrong", undefined, config.HTTP_ACCEPTED));
    }
};

exports.login = async (req,res, next) => {
    try {
      const email = req.body.email;
      const user = await User.findOne({ where: { email: email} });
      if (!user) {
        next(
          new GeneralError("Email is not found", undefined, config.HTTP_NOT_FOUND)
        );
      } else {
        const password = req.body.password;
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
          const JwtToken = jwt.sign({ email: email}, process.env.JWT_SECRET,{
            expiresIn: "72h"
          });
          next(
            new GeneralResponse(
              "Login SuccessFully..",
              { token: JwtToken},
              config.HTTP_CREATED
            )
          );
         } else {
           next(
             new GeneralError(
               "Password does not match",
               undefined,
               config.HTTP_ACCEPTED
             )
           );
         }
      }
    } catch (err){
      logger,error(err);
      next(new GeneralError("Something wrong", undefined, config.HTTP_ACCEPTED));
    }
  };

exports.viewProfile = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        const user = await User.findAll({
            attributes:["Name", "Gender", "uploadImage"]
        })
        if (user) {
            next(new GeneralResponse("User Details", user, config.HTTP_ACCEPTED));
        } else {
            next(
                new GeneralError("Email is not found", undefined, config.HTTP_NOT_FOUND)
            );
        }
    } catch (err) {
        logger.error(err);
        next(new GeneralError("Something Wrong", undefined, config.HTTP_ACCEPTED));
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        console.log("id",req.params.id)
        const user_id = req.params.id;
        const data = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            uploadImage: req.file.filename,
        };
        console.log(data);
        const updateData = await User.update(data, {
            
            where: {id:user_id},
            
        });
        if (updateData) {
            next(
                new GeneralResponse("DATA UPDATED", updateData, config.HTTP_ACCEPTED)
            );
        } else {
            logger.error(err);
            next(
                new GeneralError("Something Wrong", undefined, config.HTTP_ACCEPTED)
            );
        }
    } catch (err) {
        logger.error(err);
        next(new GeneralError("Something Wrong", undefined, config.HTTP_ACCEPTED));
    }
}