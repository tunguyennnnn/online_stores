CREATE TABLE IF NOT EXISTS users(
    id varchar(36) NOT NULL,
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

INSERT IGNORE INTO users (id, firstName, lastName, email, password, isAdmin, userType)
VALUES ('00000000000000000000000000000000', 'Super Admin', '', 'admin@bestseller.com', 'admin', true, null);

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
    user_id varchar(36),
    planSet_id varchar(36)
);

CREATE TABLE IF NOT EXISTS planSet (
	id varchar(36),
  planName varchar(32),
  duration varchar(32),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS transactions (
    user_id varchar(36),
    ad_id varchar(36),
    amount float,
    cardDetail varchar(32),
    dateOfPayment date,
    PRIMARY KEY(user_id, ad_id)
);

CREATE TABLE IF NOT EXISTS ads(
    id varchar(36) NOT NULL,
    user_id varchar(36),
    title varchar(32),
    price float,
    imageUrl varchar (255),
    category varchar(32),
    subCategory varchar(32),
    createdAt datetime,
    updatedAt datetime,
    forSaleBy varchar(32),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS promotionSet (
    id varchar(36) NOT NULL,
    price float,
    duration int,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS promotions (
    id varchar(36) NOT NULL,
    startDate date,
    endDate date,
    set_id varchar(36),
    ad_id varchar(36),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS rates (
    id varchar(36) NOT NULL,
    score int,
    ad_id varchar(36),
    user_id varchar(36),
    PRIMARY KEY(id)
);
