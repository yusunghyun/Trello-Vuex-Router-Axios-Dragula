module.exports = (sequelize, Sequelize) => {
  return sequelize.define('List', {
    title: {
      type: Sequelize.STRING
    },
    pos: {
      type: Sequelize.DOUBLE,
      defaultValue: 65535
    }
  },{
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  })}