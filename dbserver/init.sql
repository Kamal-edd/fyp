CREATE SCHEMA IF NOT EXISTS fyp;
CREATE TABLE fyp.feeders (  id SERIAL PRIMARY KEY,  json_conf JSONB);