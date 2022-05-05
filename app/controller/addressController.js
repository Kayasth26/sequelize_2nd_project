const db = require("../models/sequelizeconnect");
const address = db.address;
const { GeneralError } = require("../utils/error");
const { GeneralResponse } = require("../utils/response");
const config = require("../utils/config");
const logger = require("../logger/logger");
const {addressValid, addressUpdate} = require("../validation/addressValidation");

exports.multiAddAddress = async (req, res, next) => {
    try {
        const {title,address1,address2,country,state,city,pincode} = req.body;

        const data = {
            title,address1,address2,country,state,city,pincode
        }

        const user = await address.create(data);

        if(user)
    {
        next(new GeneralError("All data added", user, config.HTTP_ACCEPTED));
    }
    else
    {
        next(new GeneralError("all data added"));
        }
    } catch (err) {
        logger.error(err);
        console.log(err);
        next(new GeneralError("Something Wrong", undefined, config.HTTP_ACCEPTED));
    }
};

exports.findAddress = async (req, res, next) => {
    try {
        const data = await address.findAll({
        attributes: ["id", "address1", "address2"]
    })
        if (data) {
            await next(
                new GeneralResponse("User Details", data, config.HTTP_SUCCESS)
            );
        } else {
            next(
                new GeneralError("Something Wrong", undefined, config.HTTP_ACCEPTED)
            );
    }
} catch (err) {
    logger.log(err);
    console.log(err);
    next(new GeneralError("Something Wrong", undefined, config.HTTP_ACCEPTED));
    }
};

exports.updateAddress = async (req, res, next) =>{
    try {
        const { error } = new address(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        } else {
            const data = {
                title: req.body.title,
                address1: req.body.address1,
                address2: req.body.address2,
                country: req.body.country,
                state: req.body.state,
                city: req.body.city,
                pincode: req.body.pincode,
            };

            const updateData = await address.update(data, {
                where: { id: req.params.id },
            });
            if (updateData) {
                await next(
                    new GeneralResponse("Data Updated", updateData, config.HTTP_SUCCESS)
                );
            } else {
                logger.error(err);
                next(
                    new GeneralError("Data not Found", undefined, config.HTTP_ACCEPTED)
                );
            }
        }
    } catch (err) {
        logger.error(err);
        next(new GeneralError("Something Wrong", undefined, config.HTTP_ACCEPTED));
    }
};

exports.deleteaddress = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await address.findByPk(id);
        if(data) {
            data.destroy(id);
            await next(new GeneralResponse("Data Deleted",config.HTTP_SUCCESS));
        } else {
            next(new GeneralError("Id not found", undefined, config.HTTP_NOT_FOUND));
        }
    } catch (err){
        next(new GeneralError("Something WOrng", undefined, config.HTTP_ACCEPTED));
    }
};