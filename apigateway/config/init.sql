CREATE TABLE IF NOT EXISTS users(
    id int NOT NULL AUTO_INCREMENT,
    firstName varchar(32),
    lastName varchar(32),
    email varchar(64),
    password varchar (32),
    isAdmin tinyint(1),
    userType varchar(32),
    province varchar(255),
    city varchar(255),
    PRIMARY KEY(id),
    UNIQUE (email)
);

INSERT IGNORE INTO users (firstName, lastName, email, password, isAdmin, userType)
VALUES ('Super Admin', '', 'admin@bestseller.com', 'admin', true, null);

CREATE TABLE IF NOT EXISTS locations (
    province varchar(32),
    city varchar(32),
    PRIMARY KEY(city, province)
);

CREATE TABLE IF NOT EXISTS plans (
    id int NOT NULL AUTO_INCREMENT,
    startDate date,
    lastDate date,
    price float(32),
    user_id int,
    planSet_id int,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS planSet (
	id int NOT NULL AUTO_INCREMENT,
  name varchar(32),
  price float,
  duration varchar(32),
  PRIMARY KEY(id),
  UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS transactions (
    user_id int,
    transaction_id int,
    type varchar(255),
    amount float,
    cardDetail varchar(32),
    dateOfPayment datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id, type, transaction_id)
);

CREATE TABLE IF NOT EXISTS ads(
    id int NOT NULL AUTO_INCREMENT,
    user_id int,
    title varchar(255),
    price float,
    imageUrl varchar (255),
    description varchar(255),
    phone varchar(30),
    address varchar (255),
    category varchar(32),
    subCategory varchar(32),
    type varchar(36) DEFAULT 'ONLINE_AD',
    createdAt datetime DEFAULT CURRENT_TIMESTAMP,
    updatedAt datetime,
    deletedAt datetime DEFAULT NULL,
    forBuySale tinyint(1) DEFAULT 0,
    province varchar(255),
    city varchar(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS promotionSet (
    id int NOT NULL AUTO_INCREMENT,
    price float,
    duration int,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS promotions (
    id int NOT NULL AUTO_INCREMENT,
    startDate date,
    endDate date,
    set_id int,
    ad_id int,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS rates (
    id int NOT NULL AUTO_INCREMENT,
    score int,
    ad_id int,
    user_id int,
    PRIMARY KEY(id),
    CONSTRAINT UC_Rates UNIQUE (ad_id, user_id)
);

CREATE TABLE IF NOT EXISTS stores (
  id INT,
  strategicLocation VARCHAR (8),
  address VARCHAR (128),
  PRIMARY KEY (id)
);

INSERT IGNORE INTO stores (id, strategicLocation, address)
VALUES (001, "SL-1", "123 Marketplace, Montreal, QC"),
				(002, "SL-2", "456 Marketplace, Montreal, QC"),
				(003, "SL-3", "789 Marketplace, Montreal, QC"),
				(004, "SL-4", "001 Marketplace, Montreal, QC");
