module.exports = (sequelize, DataTypes) => {
  const ChessStatsEntry = sequelize.define('ChessStatsEntry', {
    user: DataTypes.STRING,  
    blitz_wins: DataTypes.INTEGER,
    blitz_losses: DataTypes.INTEGER,
    blitz_draws: DataTypes.INTEGER,
    blitz_rating: DataTypes.INTEGER,
    rapid_wins: DataTypes.INTEGER,
    rapid_losses: DataTypes.INTEGER,
    rapid_draws: DataTypes.INTEGER,
    rapid_rating: DataTypes.INTEGER,
  });
  return ChessStatsEntry;
};