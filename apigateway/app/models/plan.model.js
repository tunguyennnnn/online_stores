const Moment = require('moment')
const uuid = require('uuid/v1')

function createSet ({exec, name, price, duration}) {
  return exec(['INSERT INTO planSet(name, price, duration)',
    `VALUES('${name}', ${price}, ${duration})`].join(' '))
        .then(() => getSet({exec}))
}

function getSet ({exec, isAdmin}) {
  return exec('SELECT * FROM planSet')
}

function create ({exec, userId, planId, startDate, endDate}) {
  return exec(['INSERT INTO plans(user_id, planSet_id, startDate, lastDate)',
    `VALUES('${userId}', '${planId}', '${startDate}', '${endDate}')`].join(' '))
}

function getPlanSet ({exec, setId}) {
  return exec(`SELECT * from planSet where planSet.id = ${setId}`)
    .then(plans => plans.first())
}

module.exports = {createSet, create, getSet, getPlanSet}
