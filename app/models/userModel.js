module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
      " userdata",
      {
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
        },
        gender: {
          type: Sequelize.STRING,
          enum: ["male", "female"],
        },
        password: {
          type: Sequelize.STRING,
        },
        uploadImage: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
      }
    );
  };