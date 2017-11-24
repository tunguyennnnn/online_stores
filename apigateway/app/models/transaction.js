function buy ({exec, userId, type, transaction_id, amount, cardDetail}) {
  return exec(['INSERT INTO transactions(user_id, transaction_id, type, amount, cardDetail, dateOfPayment)',
    `VALUES(${userId}, '${ad_id}', '${type}', '${amount}', '${cardDetail}';`].join(' '))
}

function create ({exec, userId, type, transaction_id, amount, cardDetail}) {
  return exec(['INSERT INTO transactions(user_id, transaction_id, type, amount, cardDetail)',
               `VALUES(${userId}, ${transaction_id}, '${type}', ${amount}, '${cardDetail}')`].join(' '))
}

module.exports = {buy, create}
