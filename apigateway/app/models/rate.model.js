function create ({exec, userId, adId, score}) {
  return exec(['INSERT INTO rates (score, ad_id, user_id)',
    `VALUES(${score}, ${adId}, ${userId});`].join(' '))
}

module.exports = {create}
