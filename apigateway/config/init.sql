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

INSERT IGNORE INTO users (firstName, lastName, email, password, isAdmin, userType, province)
VALUES ('Super Admin', 'Admin', 'admin@bestseller.com', 'admin', 1, null, 'QC'),
				('Lily', 'Flowers', 'flowers@seller.com', 'pw', 0, 'owner', 'QC'),
                ('Benny', 'Flour', 'flour@seller.com', 'pass', 0, 'owner', 'QC'),
                ('Wendy', 'Burger', 'wendy@seller.com', 'pass', 0, 'business', 'QC'),
                ('Charlie', 'Smith', 'smith@seller.com', 'pass', 0, 'owner', 'QC'),
                ('Richard', 'Lionheart', 'lion@seller.com', 'pw', 0, 'owner', 'QC'),
                ('Daisy', 'Dandelion', 'daisy@seller.com', 'pw', 0, 'owner', 'QC'),
                ('Emiliy', 'Dickens', 'emily@seller.com', 'pw', 0, 'owner', 'QC'),
                ('Eric', 'Miller', 'eric@seller.com', 'pw', 0, 'owner', 'QC'),
                ('Mark', 'Flint', 'flint@seller.com', 'pw', 0, 'owner', 'QC'),
                ('Nathaniel', 'Grant', 'nate@seller.com', 'pw', 0, 'owner', 'QC'),
                ('Owen', 'Holmes', 'owen@seller.com', 'pw', 0, 'owner', 'QC');

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
  duration int,
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
    type varchar(36) DEFAULT NULL,
    adType varchar(36) DEFAULT 'Sell',
    createdAt datetime DEFAULT CURRENT_TIMESTAMP,
    updatedAt datetime,
    deletedAt datetime DEFAULT NULL,
    forBuySale tinyint(1) DEFAULT 0,
    province varchar(255),
    city varchar(255),
    store varchar(255),
    timeslot varchar(255),
    PRIMARY KEY(id)
);

INSERT IGNORE INTO ads (user_id, title, price, imageUrl, description, category, subCategory, createdAt, forBuySale, city, store, province, type)
VALUES (2, 'Winter Coat', 20.00, null, 'description', 'BUY_AND_SELL', 'Clothing', '2017-12-01 12:00:00', 1, 'Montreal', '1', 'QC', 'Physical Store'),
				(2, 'Winter Coat', 20.00, null, 'description', 'BUY_AND_SELL', 'Clothing', '2017-12-01 12:00:00', 1, 'Montreal', '1', 'QC', 'Physical Store'),
                (2,'Winter Coat', 20.00, null, 'description', 'BUY_AND_SELL', 'Clothing', '2017-12-01 12:00:00', 1, 'Montreal', '2', 'QC', 'Physical Store'),
                (2,'Winter Coat', 20.00, null, 'description', 'BUY_AND_SELL', 'Clothing', '2017-12-01 12:00:00', 1, 'Montreal', '1', 'QC', 'Physical Store'),
                (2, 'A Tale of Two Cities', 20.00, null, 'description', 'BUY_AND_SELL', 'Books', '2017-12-01 12:00:00', 1, 'Montreal', '2', 'QC', 'Physical Store'),
                (2,'Sony Radio', 20.00, null, 'description', 'BUY_AND_SELL', 'Electronics', '2017-12-01 12:00:00', 1, 'Montreal', '3', 'QC', 'Physical Store'),
                (2,'Pride and Prejudice', 20.00, null, 'description', 'BUY_AND_SELL', 'Books', '2017-12-01 12:00:00', 1, 'Montreal', '4', 'QC', 'Physical Store'),
                (2,'Math Tutor', 20.00, null, 'description', 'SERVICES', 'Tutors', '2017-12-01 12:00:00', 1, 'Montreal', '1','BC', null),
                (3,'French Tutor', 20.00, null, 'description', 'SERVICES', 'Tutors', '2017-12-01 12:00:00', 1, 'Montreal', '3','BC', null),
                (4,'English Tutor', 20.00, null, 'description', 'SERVICES', 'Tutors', '2017-12-01 12:00:00', 1, 'Montreal', '1', 'BC', 'Physical Store'),
                (5, 'Databases Tutor', 20.00, null, 'description', 'SERVICES', 'Tutors', '2017-12-01 12:00:00', 1, 'Toronto', '2', 'BC', 'Physical Store'),
                (6,'Wedding Photographer', 20.00, null, 'description', 'SERVICES', 'Photographers', '2017-12-01 12:00:00', 1, 'Toronto', '3', 'BC', 'Physical Store'),
                (7, 'Special Events Photographer', 20.00, null, 'description', 'SERVICES', 'Photographers', '2017-12-01 12:00:00', 1, 'Toronto', '1','ON', null),
                (2,'Nature Photographer', 20.00, null, 'description', 'SERVICES', 'Photographers', '2017-12-01 12:00:00', 1, 'Toronto', '1', 'ON', 'Physical Store'),
                (5,'Mega Subwoofer', 20.00, null, 'description', 'RENT', 'Electronics', '2017-12-01 12:00:00', 1, 'Toronto', '2', 'ON', 'Physical Store'),
                (2,'Toyota 2016', 20.00, null, 'description', 'RENT', 'Car', '2017-12-01 12:00:00', 1, 'Toronto', '1', 'ON', 'Physical Store'),
                (2,'Westmount Apartment', 20.00, null, 'description', 'RENT', 'Apartments', '2017-12-01 12:00:00', 1, 'Toronto', '2','BC', null),
                (6,'Vera Wang Dress', 20.00, null, 'description', 'RENT', 'Wedding Dresses', '2017-12-01 12:00:00', 1, 'Toronto', '3', 'ON', 'Physical Store'),
                (5,'Digital Art', 20.00, null, 'description', 'JOBS', 'Art', '2017-12-01 12:00:00', 1, 'Toronto', '1','ON', null),
                (3, 'Mural Painter', 20.00, null, 'description', 'JOBS', 'Art', '2017-12-01 12:00:00', 1, 'Toronto', '1','ON', null);

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


INSERT IGNORE INTO transactions (user_id, transaction_id, type, amount, cardDetail, dateOfPayment)
VALUES (2, 10101, 'ad promotion', 10.00, 'visa card', '2017-12-01'),
				(2, 10102, 'ad promotion',10.00, 'master card', '2017-12-01'),
                (2, 10103, 'ad promotion', 10.00, 'visa card', '2017-12-01'),
                (2, 10104, 'ad promotion', 10.00, 'master card', '2017-12-01'),
                (3, 10105, 'ad promotion', 50.00, 'visa card', '2017-12-01'),
                (3, 10106, 'ad promotion', 50.00, 'master card', '2017-12-01'),
                (3, 10107, 'ad promotion', 50.00, 'visa card', '2017-12-01');
