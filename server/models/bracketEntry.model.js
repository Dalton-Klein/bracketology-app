module.exports = (sequelize, DataTypes) => {
  const BracketEntry = sequelize.define('BracketEntry', {
    username: {
      type: DataTypes.STRING,  
      unique: true,
      allowNull: false,
    },
    masterID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picks: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
      allowNull: false,
    },

  });
  return BracketEntry;
};