-- Permashare PostgreSQL schema
-- Based on PermashareERD.png
-- Run with: psql -U <user> -f db/create_database.sql

-- Optional: create and connect to a dedicated database.
-- Uncomment if desired.
-- CREATE DATABASE permashare;
-- \connect permashare;

BEGIN;

CREATE TABLE IF NOT EXISTS "User" (
  user_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_firstname VARCHAR(100) NOT NULL,
  user_lastname VARCHAR(100) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  salary NUMERIC(12,2),
  goal_amount NUMERIC(12,2),
  team_role VARCHAR(100),
  is_resident BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS "Contract" (
  contract_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id INTEGER NOT NULL,
  num_contract INTEGER,
  contract_name VARCHAR(255),
  contract_time INTEGER,
  contract_type VARCHAR(100),
  CONSTRAINT fk_contract_user
    FOREIGN KEY (user_id)
    REFERENCES "User"(user_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS "HouseDetails" (
  house_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  contract_id INTEGER,
  house_title VARCHAR(255) NOT NULL,
  listing_price NUMERIC(12,2),
  street_address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  zip INTEGER,
  square_footage NUMERIC(12,2),
  num_bedrooms INTEGER,
  num_bathrooms NUMERIC(4,1),
  CONSTRAINT fk_house_contract
    FOREIGN KEY (contract_id)
    REFERENCES "Contract"(contract_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS "Team" (
  team_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  house_id INTEGER NOT NULL,
  CONSTRAINT fk_team_house
    FOREIGN KEY (house_id)
    REFERENCES "HouseDetails"(house_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS "UserTeam" (
  user_id INTEGER NOT NULL,
  team_id INTEGER NOT NULL,
  PRIMARY KEY (user_id, team_id),
  CONSTRAINT fk_userteam_user
    FOREIGN KEY (user_id)
    REFERENCES "User"(user_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT fk_userteam_team
    FOREIGN KEY (team_id)
    REFERENCES "Team"(team_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

COMMIT;
