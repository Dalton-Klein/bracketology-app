module.exports = (sequelize, DataTypes) => {
  const MWStatsEntry = sequelize.define('MWStatsEntry', {
    user: DataTypes.STRING,  
    kills: DataTypes.INTEGER,
    deaths: DataTypes.INTEGER,
    kdratio: DataTypes.DOUBLE(10,6),
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    wlratio: DataTypes.DOUBLE(10,6),
    timePlayed: DataTypes.INTEGER,
    longestKillstreak: DataTypes.INTEGER,
    headshots: DataTypes.INTEGER,
  });
  return MWStatsEntry;
};