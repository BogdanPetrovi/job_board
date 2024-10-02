CREATE TABLE Companies (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  industry TEXT NOT NULL,
  description TEXT NOT NULL,
  logo BYTEA
);

CREATE TABLE Jobs (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  company_id BIGINT NOT NULL REFERENCES companies(id),
  name VARCHAR(30) NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  avaliable_spaces INT NOT NULL,
  type TEXT NOT NULL,
  min_salary INT NOT NULL, 
  max_salary INT NOT NULL
);


CREATE TABLE Applies (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  job_id BIGINT NOT NULL REFERENCES jobs(id),
  name TEXT,
  date DATE NOT NULL
);


SELECT * FROM jobs JOIN companies ON jobs.company_id = companies.id JOIN applies ON applies.job_id = jobs.id WHERE jobs.name='Cashier' AND jobs.location='Belgrade, Serbia';