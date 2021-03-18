module.exports = (sequelize, DataTypes) => {
  const BracketEntry = sequelize.define('BracketEntry', {
    username: {
      type: DataTypes.STRING,  
      unique: true,
      allowNull: false,
    },
    masterId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picks: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: false,
    },

  });
  return BracketEntry;
};