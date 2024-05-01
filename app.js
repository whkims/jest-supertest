const express = require('express')
const bodyParser = require("body-parser");

const { get, post, put, del } = require('./todo-service')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/todo', async (req, res) => {
  try {
    const content = await get()
    console.log(content);
    return res.json({ result: content })
  } catch (err) {
    return res.status(500).json({ result: 'server internal error', error: err })
  }
})

// post
app.post('/todo', async (req, res) => {
  try {
    const result = await post(req.body.id, req.body.content)
    console.log(result);
    return res.json({ result: result })
  } catch (err) {
    return res.status(500).json({ result: 'server internal error', error: err })
  }
})
// put
app.put('/todo', async (req, res) => {
  try {
    console.log('put');
    // console.log(req.body);
    const result = await put(req.body.content)
    return res.json({ result: result })
  } catch (err) {
    return res.status(500).json({ result: 'server internal error', error: err })
  }
})

// delete
app.delete('/todo', async (req, res) => {
  try {
    console.log('del');
    console.log(req.body);
    const result = await del(req.body.id)
    console.log(result);
    return res.json({ result: result })
  } catch (err) {
    return res.status(500).json({ result: 'server internal error', error: err })
  }
})

// const server = app.listen(port, () => {
//   console.log(`Todo app listening on port ${port}`)
// })

// module.exports = { app, server }
module.exports =  app;