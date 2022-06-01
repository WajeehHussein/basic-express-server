const express = require('express')
const errorHandler = require('./error-handlers/500')
const logger = require('./middleware/logger')
const validator = require('./middleware/validator')
const notFound = require('./error-handlers/404')
const app = express();

app.use(logger)


app.get(`/person`, validator, (req, res) => {
    res.json({
        name: req.query.name
    })
})


app.use(errorHandler);
app.use('*', notFound);

function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    })
}
module.exports = {
    app: app,
    start: start,
}