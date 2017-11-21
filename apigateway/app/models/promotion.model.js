const uuid = require('uuid/v1')

function createSet ({exec, price, duration}) {
  return exec(['INSERT INTO promotionSet (price, duration)',
               `VALUES(${price}, ${duration});`].join(' '))
        .then(() => {
          return getSet({exec})
        })
}

function getSet ({exec}) {
  return exec('SELECT * FROM promotionSet')
}

function create ({exec, itemId, setId, startDate, endDate}) {
  return exec(['INSERT INTO promotions (ad_id, set_id, startDate, endDate)',
               `VALUES('${itemId}', '${setId}', '${startDate}', '${endDate}')`].join(' '))
}

function getPromotionSet ({exec, setId}) {
  return exec(`SELECT * FROM promotionSet as p WHERE p.id = ${setId}`)
    .then(sets => sets.first())
}

module.exports = {createSet, create, getSet, getPromotionSet}
