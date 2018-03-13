const Sequelize = require('sequelize')
const config = require('../config')

const seq = new Sequelize(config.db.name, config.db.user, config.db.password, {
  dialect: 'mysql',
  host: config.db.host,
  port: config.db.port
})

const Comment = seq.import('./comments.js')
const Relationships = seq.import('./relationships.js')
const Options = seq.import('./options.js')
const Metas = seq.import('./metas.js')
const Users = seq.import('./users.js')
const Content = seq.import('./content.js')

seq.sync({force: false})

module.exports = {
  Content,
  Comment,
  Relationships,
  Options,
  Metas,
  Users
}
