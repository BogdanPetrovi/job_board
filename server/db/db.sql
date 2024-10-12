CREATE TABLE Companies (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  industry TEXT NOT NULL,
  description TEXT NOT NULL,
  logo BYTEA
);

CREATE TABLE Jobs (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  company_id BIGINT NOT NULL REFERENCES companies(id),
  job_name VARCHAR(30) NOT NULL,
  job_description TEXT NOT NULL,
  location TEXT NOT NULL,
  avaliable_spaces TEXT NOT NULL,
  type TEXT NOT NULL,
  min_salary INT NOT NULL, 
  max_salary INT NOT NULL
);


CREATE TABLE Applies (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  job_id BIGINT NOT NULL REFERENCES jobs(id),
  name TEXT NOT NULL,
  date DATE NOT NULL
);