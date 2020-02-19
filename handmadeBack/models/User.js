module.exports = (sequelize, Sequelize) => {
  return sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
    }
  },{
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  })}