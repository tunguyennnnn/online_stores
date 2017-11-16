const uuid = require('uuid/v1')

function createSet ({exec, price, duration}) {
  return exec(['INSERT INTO promotionSet (id, price, duration)',
               `VALUES('${uuid()}', ${price}, ${duration});`].join(' '))
        .then(() => {
          return getSet({exec})
        })
}

function getSet ({exec}) {
  return exec('SELECT * FROM promotionSet')
}

function create ({exec, itemId, setId, startDate, endDate}) {
  return exec(['INSERT INTO promotions (id, ad_id, set_id, startDate, endDate)',
               `VALUES('${uuid()}', '${itemId}', '${setId}', '${startDate}', '${endDate}')`].join(' '))
}

module.exports = {createSet, create, getSet}
