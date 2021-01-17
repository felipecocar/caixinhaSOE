const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const dbUtil = require('./mongoUtil')

let db;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/auth/signin', (req, res) => {
  res.send('TODO: authorization')
})

app.get('/estudantes', async (req, res) => {
  const estudantes = await db.collection('user').find().toArray();
  console.log({ estudantes })
  res.send({ estudantes });
})

app.post('/estudantes', (req, res) => {
  res.send('TODO: add new estudante')
})

dbUtil.connectToServer(function(_db) {
  if(!_db) throw new Error('Failed to connected db');
  db = _db;
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})