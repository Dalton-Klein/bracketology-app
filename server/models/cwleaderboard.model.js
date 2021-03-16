module.exports = (sequelize, DataTypes) => {
  const CWLeaderboardEntry = sequelize.define('CWLeaderboardEntry', {
    user: DataTypes.STRING,  
    kills: DataTypes.INTEGER,
    deaths: DataTypes.INTEGER,
    kdratio: DataTypes.DOUBLE(10,6),
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    wlratio: DataTypes.DOUBLE(10,6),
    timePlayed: DataTypes.INTEGER,
    longestKillstreak: DataTypes.INTEGER,
  });
  return CWLeaderboardEntry;
};