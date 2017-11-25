const Store = require('../models/store.model')

function getStores (req, res, next) {
  Store.getStores({exec: res.pExec})
  .then(stores => {
    res.status(200).send(stores)
  })
  .catch(err => {
    console.log(err)
    res.status(500).send()
  })
}

module.exports = {getStores}
