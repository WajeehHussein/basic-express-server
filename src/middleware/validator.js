'use strict';
// const errorhandler = require('../error-handlers/500')
const validator = (req, res, next) => {

    if (req.query.name) {
        next();
    } else {
        next('not provided');
    }

}

module.exports = validator