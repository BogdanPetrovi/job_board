const express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./db/database');
var morgan = require('morgan')


const app = express();
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/api/v1/jobs/:name/:location', async (req,res) => {
  const location = req.params.location.toLowerCase() + '%';
  const name = '%' + req.params.name.toLowerCase() + '%';
  try {
    const result = await db.query(
      'SELECT * FROM companies JOIN jobs ON jobs.company_id = companies.id WHERE LOWER(jobs.job_name) LIKE $1 AND LOWER(jobs.location) LIKE $2;',
      [name, location]);
    res.status(200).json({
      status: "Success",
      data: {
        jobs: result.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/api/v1/jobs/get/apply/:id', async (req,res) => {
  const jobId = req.params.id;
  try {
    const result = await db.query('SELECT * FROM applies WHERE job_id = $1;', [jobId]);
    res.status(200).json({
      status:"success",
      data: {
        applies: result.rows,
      }
    })
  } catch (err) {
    console.log(err);
  }

})


app.post('/api/v1/jobs/apply', async (req,res) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = month + '/' + day + '/' + year;

  try {
    const result = await db.query(
      'INSERT INTO applies(job_id, name, date) VALUES($1, $2, $3) RETURNING *',
      [req.body.jobid, req.body.name, fullDate]  
    );
    res.status(201).json({
      status:"Sucess",
      data: result.rows
    })
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
})


app.get('/api/v1/people/companies', async (req,res) => {
  try {
    const result = await db.query('SELECT id, name FROM companies');
    res.status(200).json({
      status:"success",
      data: result.rows
    })
  } catch (err) {
    res.status(500).send(err);
    console.log(err)
  }
})

app.post('/api/v1/people/add/company', async (req,res) => {
  try {
    if(req.body.industry !== '' && req.body.description !== '' && req.body.name !== ''){
      const result = await db.query(
        'INSERT INTO companies(industry, description, name) VALUES($1, $2, $3) RETURNING *',
        [req.body.industry, req.body.description, req.body.name]
      )
      res.status(201).json({
        status: "success",
        data: result.rows
      })
    } else {
      res.status(400).send("those columns are required")
    }
    
  } catch (err) {
    res.status(500).send(err)
  }
})

app.post('/api/v1/people/add/job', async (req, res) => {
  try {
    const result = await db.query(
      'INSERT INTO jobs(company_id, job_name, job_description, location, avaliable_spaces, type, min_salary, max_salary) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [req.body.companyid, req.body.name, req.body.description, req.body.location, req.body.avaliableSpaces, req.body.type, req.body.minSal, req.body.maxSal]
    )
    res.status(201).json({
      status:"success",
      data:result.rows
    })
  } catch (err) {
    res.status(500).send(err)
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}!`);
})