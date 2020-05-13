module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("profile", {
    name: DataTypes.TEXT,
    author: DataTypes.TEXT,
    image_URL: DataTypes.TEXT
  });
  return Profile;
};
