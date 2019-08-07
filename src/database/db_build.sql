BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  user_id INT,
  post_title VARCHAR(50),
  post_description VARCHAR(300)
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  user_id INT,
  post_id INT,
  comment_description VARCHAR(300)
);

ALTER TABLE posts ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE comments ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE comments ADD FOREIGN KEY (post_id) REFERENCES posts (post_id);

INSERT INTO users (name) VALUES ('Ghassan');

INSERT INTO posts (user_id, post_title, post_description) VALUES (1, 'HTML & CSS', 'This is the first post');

INSERT INTO comments (user_id, post_id, comment_description) VALUES (1, 1, 'Test if the comment works');

COMMIT;