module.exports = (sequelize, DataTypes) => {
  const WZLeaderboardEntry = sequelize.define('WZLeaderboardEntry', {
    user: DataTypes.STRING,  
    wins: DataTypes.INTEGER,
    kills: DataTypes.INTEGER,
    kdratio: DataTypes.DOUBLE(10,6),
    downs: DataTypes.INTEGER,
    topTwentyFive: DataTypes.INTEGER,
    topTen: DataTypes.INTEGER,
    contracts: DataTypes.INTEGER,
    revives: DataTypes.INTEGER,
    topFive: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    timePlayed: DataTypes.INTEGER,
    gamesPlayed: DataTypes.INTEGER,
    scorePerMinute: DataTypes.DOUBLE(10,6),
    deaths: DataTypes.INTEGER
  });
  return WZLeaderboardEntry;
};