var express = require('express');

var router = express.Router();

/**
 * Returns API status
 * 
 * @route GET /
 * @group index - Validates and gives back API service status
 * @returns {object} 200 - {
 *  title: 'Job CRUD API',
 *  version: '1.0.0',
 *   description: 'Any user needs to sign-up/login to see available jobs, admin has all the access to CRUD any user and CRUD any job'
 * }
 * @returns {Error}  default - Unexpected error
 */
router.get('/', async function(req, res, next) {
  return res.json({
    title: 'Job CRUD API',
    version: '1.0.0',
    description: 'Any user needs to sign-up/login to see available jobs, admin has all the access to CRUD any user and CRUD any job'
  })
});

module.exports = router;
