module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Card', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    pos: {
      type: Sequelize.DOUBLE,
      defaultValue: 65535
    }
  },{
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  })}