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
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })}