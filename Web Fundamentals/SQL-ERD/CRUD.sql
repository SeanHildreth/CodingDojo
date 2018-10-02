USE twitter;

SELECT * FROM users;

INSERT INTO users(first_name, last_name, handle, birthday, created_at, updated_at)
VALUES('George', 'Jungle', 'kingofthejungle', DATE '1985-02-12', NOW(), NOW());

SELECT * FROM users;

INSERT INTO users(first_name, last_name, handle, birthday, created_at, updated_at)
VALUES('Harry', 'Todd', 'ToddisHarry', DATE '1980-08-24', NOW(), NOW());

SELECT * FROM users;

UPDATE users
SET handle = 'HarryTodd80'
WHERE id = 9;

SELECT * FROM users;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM tweets;

DELETE users
FROM users
LEFT JOIN tweets ON users.id = tweets.user_id
WHERE tweets.user_id IS NULL;

SELECT * FROM users;