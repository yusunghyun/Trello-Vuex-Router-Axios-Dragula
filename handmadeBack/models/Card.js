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
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })}