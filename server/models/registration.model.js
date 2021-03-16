module.exports = (sequelize, DataTypes) => {
  const Registrations = sequelize.define('Registrations', {
    username: 
    {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    platform: DataTypes.TEXT,
    cod_handle: DataTypes.TEXT,
    chess_handle: DataTypes.TEXT,
  });
  return Registrations;
};