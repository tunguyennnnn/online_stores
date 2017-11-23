function buy ({exec, userId, type, transactionId, amount, cardDetail, dataOfPayment}) {
  return exec(['INSERT INTO transactions(user_id, transaction_id, type, amount, cardDetail)',
    `VALUES(${userId}, '${transactionId}', '${type}', '${amount}', '${cardDetail}';`].join(' '))
}

module.exports = {buy}
