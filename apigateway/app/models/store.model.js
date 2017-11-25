function getStores ({exec}) {
  return exec('SELECT * FROM stores;')
}

module.exports = {getStores}
