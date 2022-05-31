'use strict';
const errorhandler = require('../error-handlers/500')
const validator = (req, res, next) => {

    // if (error instanceof ValidationError) {

    //     response.status(400).send(error.validationErrors);
    //     next();
    // }
    next();
}

module.exports = validator