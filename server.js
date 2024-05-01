const app = require('./app');

const server = app.listen(port, () => {
    console.log(`Todo app listening on port ${port}`)
})