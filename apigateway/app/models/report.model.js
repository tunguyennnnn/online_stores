const Promise = require('bluebird')
function report1 (exec) {
  const buyAndSell = exec(`select MAX(r.counting) as count, r.firstName, r.lastName, r.category
                            from(
                            select count(a.id) as counting, u.id, a.category, u.firstName, u.lastName
                            from users as u, ads as a
                            where u.id = a.user_id and a.category = 'BUY_AND_SELL'
                            group by a.category
                            ) as r`)
  const service = exec(`select MAX(r.counting) as count, r.firstName, r.lastName, r.category
                            from(
                            select count(a.id) as counting, u.id, a.category, u.firstName, u.lastName
                            from users as u, ads as a
                            where u.id = a.user_id and a.category = 'SERVICES'
                            group by a.category
                            ) as r`)
  const job = exec(`select MAX(r.counting) as count, r.firstName, r.lastName, r.category
                            from(
                            select count(a.id) as counting, u.id, a.category, u.firstName, u.lastName
                            from users as u, ads as a
                            where u.id = a.user_id and a.category = 'JOBS'
                            group by a.category
                            ) as r`)
  const rent = exec(`select MAX(r.counting) as count, r.firstName, r.lastName, r.category
                            from(
                            select count(a.id) as counting, u.id, a.category, u.firstName, u.lastName
                            from users as u, ads as a
                            where u.id = a.user_id and a.category = 'RENT'
                            group by a.category
                            ) as r`)
  return Promise.all([buyAndSell, service, job, rent])
}

function report2 (exec) {
  return exec(`SELECT *
FROM ads
WHERE category = 'BUY_AND_SELL'
AND createdAt > (SELECT DATE_SUB(NOW(), INTERVAL 10 DAY));`)
}

function report3 (exec) {
  return exec(`SELECT u.firstName, u.lastName, u.email
FROM users as u, ads as a
where u.id = a.user_id and a.title = 'Winter Coat'
group by u.email
`)
}

function report4 (exec) {
  return exec(`SELECT *
FROM ads
WHERE category = 'RENT';
`)
}

function report5 (exec) {

}

function report6 (exec) {

}

function report7 (exec) {
  return exec(`SELECT stores.strategicLocation, 20 AS weekday_price, 60 AS weekend_price, ads.price
FROM stores, ads;`)
}

function report8 (exec) {
  return exec(`SELECT * FROM ads WHERE ads.store = (SELECT DISTINCT id FROM stores) AND city = 'Montreal' GROUP BY category;`)
}

function report9 (exec) {

}

function report10 (exec) {
  return exec(`SELECT sum(amount), user_id
FROM transactions
GROUP BY user_id;`)
}

module.exports = {report1, report2, report3, report4, report5, report6, report7, report8, report9, report10}
