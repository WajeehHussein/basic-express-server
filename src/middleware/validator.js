'use strict';
// const errorhandler = require('../error-handlers/500')
const validator = (req, res, next) => {

    if (req.query.name) {
        if (/\d/.test(req.query.name)) {
            next('name include number')
        } else {
            next();
        }
    } else {
        next('not provided');
    }

}

module.exports = validator