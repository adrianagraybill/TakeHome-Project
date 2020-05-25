CREATE DATABASE allusers;

CREATE TABLE accounts(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
)

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255),
  user_email VARCHAR(255)
);
