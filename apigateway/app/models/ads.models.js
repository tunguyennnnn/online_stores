function getAllAds (exec) {
  return exec('SELECT * FROM ads;')
}

module.exports = {getAllAds}
