SELECT * FROM users;

INSERT INTO users (email, username, first_name, last_name, password, birthday, created_at, updated_at)
VALUES ('superman@jleague.com', 'superman', 'Clark', 'Kent', 'loisLane1938', '1938-06-18', NOW(), NOW());
INSERT INTO addresses (users_id, street, city, state, zipcode, created_at, updated_at)
VALUES ('2', '344 Clinton St', 'Metropolis', 'IL', '62960', NOW(), NOW());

SELECT * FROM users
JOIN addresses ON users.id = addresses.users_id;usersidusers

DELETE users
FROM users
JOIN addresses ON users.id = addresses.users_id
WHERE users.id = 1;

DELETE users
FROM users
WHERE id > 1;

DELETE addresses
FROM addresses
WHERE id > 1;

SELECT * FROM users;
SELECT * FROM addresses;

ALTER TABLE users
ADD fav_lang varchar(255) AFTER birthday;

ALTER TABLE users
DROP COLUMN fav_lang;

INSERT INTO users (fav_lang)
VALUES ('Python');