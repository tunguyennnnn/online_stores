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
    PRIMARY KEY(id)
);

INSERT IGNORE INTO users (firstName, lastName, email, password, isAdmin, userType)
VALUES ('Super Admin', '', 'admin@bestseller.com', 'admin', true, null);

CREATE TABLE IF NOT EXISTS locations (
    province varchar(32),
    city varchar(32),
    PRIMARY KEY(city, province)
);

INSERT IGNORE INTO location (city, province)
VALUES ('Montreal', 'Quebec'),
				('Toronto', 'Ontario'),
				('Vancouver', 'British Columbia'),
                ('Ottawa', 'Ontario'),
                ('Winnipeg', 'Manitoba');

CREATE TABLE IF NOT EXISTS mPlans (
    startDate date,
    lastDate date,
    price float(32),
    user_id int,
    planSet_id int
);

CREATE TABLE IF NOT EXISTS planSet (
	id int NOT NULL AUTO_INCREMENT,
  name varchar(32),
  price float,
  duration varchar(32),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS transactions (
    user_id int,
    ad_id int,
    amount float,
    cardDetail varchar(32),
    dateOfPayment date,
    PRIMARY KEY(user_id, ad_id)
);

CREATE TABLE IF NOT EXISTS ads(
    id int NOT NULL AUTO_INCREMENT,
    user_id int,
    title varchar(255),
    price float,
    imageUrl varchar (255),
    category varchar(32),
    subCategory varchar(32),
    createdAt datetime,
    updatedAt datetime,
    forSaleBy varchar(32),
    description varchar(255),
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
    PRIMARY KEY(id)
);
