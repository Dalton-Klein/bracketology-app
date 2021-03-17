module.exports = (sequelize, DataTypes) => {
  const BracketMaster = sequelize.define('BracketMaster', {
    bracketname: {
      type: DataTypes.STRING,  
      unique: true,
      allowNull: false,
    },
    numMatches: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    participants: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    scores: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    }

  });
  return BracketMaster;
};