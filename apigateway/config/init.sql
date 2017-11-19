DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `ads`;
DROP TABLE IF EXISTS `physicalAds`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `promotionPackages`;
DROP TABLE IF EXISTS `promotedBy`;
DROP TABLE IF EXISTS `stores`;
DROP TABLE IF EXISTS `deliveries`;
DROP TABLE IF EXISTS `rate`;
DROP TABLE IF EXISTS `transactions`;
DROP TABLE IF EXISTS `membershipPlans`;
DROP TABLE IF EXISTS `subscribeTo`;


CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL,
    firstName VARCHAR (32),
    lastName VARCHAR (32),
    password VARCHAR (32),
    email VARCHAR (64),
    address VARCHAR (128),
    type VARCHAR (32),
    PRIMARY KEY (id)
);

INSERT IGNORE INTO users (id, firstName, lastName, password, email, address, type)
VALUES (1111, 'Thursday', 'McAdmin', 'thursdaysunbreakablepassword','thursday.mcadmin@sellme.com', '22 St Admin, Montreal, QC', 'admin'),
			(1112, 'Monday', 'McAdministrator', 'supermondaypassword', 'monday.mcadministrator@sellme.com', '33 St Admin, Montreal, QC', 'admin'),
			(2222, 'Sunday', 'McUser', 'password', 'sunday.mcuser@veryfreemail.com', '21 Users Street, Toronto, ON', 'user'),
            (2223, 'Saturday', 'Managerson', 'password', 'saturday.managerson@veryfreemail.com', '5 Managers Street, Montreal, QC', 'store manager');

CREATE TABLE IF NOT EXISTS ads (
  id INT,
  user_id INT,
  title VARCHAR (64),
  description VARCHAR (128),
  price FLOAT,
  city VARCHAR (32),
  province VARCHAR (32),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS physicalAds (
  id INT,
  timeSlot INT,
  startDate DATE,
  endDate DATE,
  delivery BOOLEAN,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS categories (
  name VARCHAR (16),
  subcategory VARCHAR (16),
  PRIMARY KEY (name, subcategory)
);

CREATE TABLE IF NOT EXISTS promotionPackages (
  days INT,
  price FLOAT,
  PRIMARY KEY (days)
);

CREATE TABLE IF NOT EXISTS promotedBy(
  ad_id INT,
  promotion_days INT,
  startDate DATE,
  endDate DATE,
  PRIMARY KEY (ad_id, promotion_days, startDate)
);

CREATE TABLE IF NOT EXISTS stores (
  id INT,
  strategicLocation VARCHAR (8),
  address VARCHAR (128),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS deliveries (
  id INT,
  store_id INT NOT NULL,
  ad_id INT NOT NULL,
  buyer_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rate (
    user_id INT NOT NULL,
    ad_id INT NOT NULL,
    rating INT,
    PRIMARY KEY(user_id, ad_id)
);

CREATE TABLE IF NOT EXISTS transactions (
  id INT,
  user_id INT NOT NULL,
  item_id INT NOT NULL,
  date DATETIME NOT NULL,
  type VARCHAR (16) NOT NULL,
  paymentMethod VARCHAR (32) NOT NULL,
  price FLOAT NOT NULL,
  cardDetails VARCHAR (64) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS membershipPlans (
  name VARCHAR (16),
  price FLOAT,
  PRIMARY KEY (name)
);

CREATE TABLE IF NOT EXISTS subscribeTo (
  user_id INT,
  membershipPlan_name VARCHAR (16),
  startDate DATE,
  endDate DATE,
  PRIMARY KEY (user_id, membershipPlan_name, startDate)
);

SELECT * FROM users;
SELECT * FROM ads;
SELECT * FROM physicalAds;
SELECT * FROM categories;
SELECT * FROM promotionPackages;
SELECT * FROM promotedBy;
SELECT * FROM stores;
SELECT * FROM deliveries;
SELECT * FROM rate;
SELECT * FROM transactions;
SELECT * FROM membershipPlans;
SELECT * FROM subscribeTo;
