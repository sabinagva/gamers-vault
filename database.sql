
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "wishlist" (
    "id" SERIAL PRIMARY KEY,
    "game_name" VARCHAR (3000),
    "game_id" INT,
    "user_id" INT REFERENCES "user" --this will be foreign key

);

CREATE TABLE "catalog" (
    "id" SERIAL PRIMARY KEY,
    "played_game_name" VARCHAR (3000),
    "image_url" VARCHAR(3000),
    "description" TEXT,
    "rating" INT,
    "game_id" INT,
    "user_id" INT REFERENCES "user" --this will be foreign key

);

INSERT INTO "user" ("username", "password")
VALUES ('Grigori', '123456789'),
       ('Bean', '54321');

INSERT INTO "wishlist" ("game_name","game_id", "user_id" )
VALUES('mortal kombat', '1234', '1'),
     ('valorant', '4321', '2'),
     


INSERT INTO "catalog" ("played_game_name","image_url", "description", "rating", "game_id" "user_id" )
VALUES('rust', 'https://gmedia.playstation.com/is/image/SIEPDC/fortnite-chapter-4-season-2-keyart-01-en-09mar23?$native$', 'oky game frustrating ', '0','1'),
      ('diablo', 'https://gmedia.playstation.com/is/image/SIEPDC/fortnite-chapter-4-season-2-keyart-01-en-09mar23?$native$', 'good game', '0','2');
   
