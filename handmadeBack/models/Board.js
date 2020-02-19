module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Board', {
    title: {
      type: Sequelize.STRING
    },
    bgColor: {
      type: Sequelize.STRING,
      defaultValue: 'rgb(0, 121, 191)'
    }
  },{
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  })}