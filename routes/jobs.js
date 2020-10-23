var router = require("express-promise-router")();

const  {jobFormRequest} = require('../middlewares/form-request/job')
const { hasPermissions } = require('../middlewares/auth');
const jobController = require('../controllers/job.controller')

/**
 * @typedef Job
 * @property {string} title.required - Job's title
 * @property {string} job_description.required - Job's description
 * @property {string} company.required - Company of the job
 */
/**
 * Returns ALL Jobs
 * 
 * @route GET /jobs
 * @group Job - Deals with all CRUD operations with job model
 * @param {string} sort.query - sort parament
 * @param {string} page.query - set the page number
 * @param {string} filter.query - set filter query 
 * @security JWT
 * @returns {object} 200 - Array of users
 * @returns {Error}  default - Unexpected error
 */
router.get('/', hasPermissions(['view any job', 'view job']),jobController.All);

/**
 * Get a  job 
 * 
 * @route GET /jobs/{id}
 * @group Job 
 * @param {string} id.path.required - job id
 * @security JWT
 * @returns {object} 200 - Job object
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', hasPermissions(['view job']),jobController.get);


/**
 * Create a new job 
 * 
 * @route POST /jobs/
 * @group Job 
 * @param {JOB.model} user.body.required - the new job
 * @security JWT
 * @returns {object} 200 - User object
 * @returns {Error}  default - Unexpected error
 */
router.post('/', hasPermissions(['create job']) && jobFormRequest('createJob'), jobController.create);

/**
 * Update an existing job by id 
 * 
 * @route PATCH /jobs/:id
 * @group Job
 * @param {string} id.path.required - job id
 * @param {JOB.model} user.body - the new job object
 * @security JWT
 * @returns {JOB.model} 200 - Job object
 * @returns {Error}  default - Unexpected error
 */
router.patch('/:id', hasPermissions(['update job']) && jobFormRequest('updateJob'), jobController.update);

/**
 * Remove a job  with id
 * 
 * @route DELETE /jobs/{id}
 * @group Job 
 * @param {string} id.path.required - job id
 * @security JWT
 * @returns {object} 200 - Job object
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', hasPermissions(['remove job']),jobController.remove);

module.exports = router;
