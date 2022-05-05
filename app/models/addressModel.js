module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define(
      "addressdata",
      {
        title: {
          type: Sequelize.STRING,
        },
        address1: {
          type: Sequelize.STRING,
        },
        address2: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
         
        },
        state: {
          type: Sequelize.STRING,
          
        },
        city: {
          type: Sequelize.STRING,
          
        },
        pincode: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
      }
    );
    return Address;
};