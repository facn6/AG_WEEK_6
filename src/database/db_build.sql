BEGIN;

DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "comment" CASCADE;
DROP TABLE IF EXISTS "post" CASCADE;

CREATE TABLE "user" (
  "user_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(30) NOT NULL
);

CREATE TABLE "post" (
  "post_id" SERIAL PRIMARY KEY,
  "user_id" INT,
  "post_title" VARCHAR(50),
  "post_description" VARCHAR(300)
);

CREATE TABLE "comment" (
  "comment_id" SERIAL PRIMARY KEY,
  "user_id" INT,
  "post_id" INT,
  "comment_description" VARCHAR(300)
);

ALTER TABLE "post" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "comment" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "comment" ADD FOREIGN KEY ("post_id") REFERENCES "post" ("post_id");

INSERT INTO "user" (name) VALUES
('Ghassan')
('Ayah')

COMMIT;