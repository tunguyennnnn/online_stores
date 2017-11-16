const Moment = require('moment')
const uuid = require('uuid/v1')

function createSet ({exec, name, price, duration}) {
  return exec(['INSERT INTO planSet(id, name, price, duration)',
               `VALUES('${uuid()}', '${name}', '${price}', '${duration}')`].join(' '))
}

function getSet ({exec, isAdmin}) {
  return exec('SELECT * FROM planSet')
}

function create ({exec, userId, planId, startDate, endDate}) {
  return exec(['INSERT INTO plans(id, userId, planId, startDate, endDate)',
               `VALUES('${uuid()}', '${userId}', '${planId}', '${startDate}', '${endDate}')`].join(' '))
}

module.exports = {createSet, create, getSet}
