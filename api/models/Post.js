const { Model } = require('sequelize');
const User = require('./User');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model { }

  Post.init({
    title: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    images: { type: DataTypes.ARRAY(DataTypes.STRING) },

  }, { sequelize });

  Post.associate = (models) => {
    Post.belongsTo(models.User, { as: 'owner', foreignKey: 'UserId' });
  };

  return Post
}