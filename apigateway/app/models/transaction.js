function buy ({exec, userId, type, transaction_id, amount, cardDetail, dataOfPayment}) {
  return exec(['INSERT INTO transactions(user_id, ad_id, amount, cardDetail, dataOfPayment)',
    `VALUES(${userId}, '${user_id}', '${ad_id}', '${amount}', '${cardDetail}';`].join(' '))
}

module.exports = {buy}
