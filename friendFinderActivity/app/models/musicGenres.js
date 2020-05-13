module.exports = function(sequelize, Sequelize) {
    var musicGenres = sequelize.define("musicGenre", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      lastname: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      username: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    return User;
  };