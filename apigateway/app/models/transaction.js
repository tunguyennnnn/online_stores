const Promise = require('bluebird')
const _ = require('lodash')

function buy ({exec, userId, type, transaction_id, amount, cardDetail}) {
  return exec(['INSERT INTO transactions(user_id, transaction_id, type, amount, cardDetail, dateOfPayment)',
               `VALUES(${userId}, '${ad_id}', '${type}', '${amount}', '${cardDetail}';`].join(' '))
}

function create ({exec, userId, type, transaction_id, amount, cardDetail}) {
  return exec(['INSERT INTO transactions(user_id, transaction_id, type, amount, cardDetail)',
               `VALUES(${userId}, ${transaction_id}, '${type}', ${amount}, '${cardDetail}')`].join(' '))
}

function getAll ({exec}) {
  const promotionTransactionPromise = exec(
    `SELECT u.firstName, u.lastName, u.email, t.type, a.type as adType, t.amount, t.dateOfPayment, p.startDate, p.endDate, a.title, a.imageUrl
     FROM transactions as t, users as u, promotions as p, ads as a
     WHERE t.type = 'promotions' AND t.user_id = u.id AND t.transaction_id = p.id AND a.id = p.ad_id`
  )
  const planTransactionPromise = exec(
    `SELECT * FROM transactions as t, users as u, plans as p
     WHERE t.type = 'plans' AND t.user_id = u.id AND t.transaction_id = p.id`
  )
  return Promise.all([promotionTransactionPromise, planTransactionPromise])
    .then(data => {
      const [t1, t2] = data
      return _.concat(t1, t2)
    })
}

module.exports = {buy, create, getAll}
