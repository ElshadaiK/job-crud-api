const Joi = require('joi');


exports.jobFormRequest = schemaName => async (req,res,next) => {
    let validationObjects = {
        createJob: () => 
            Joi.object({
                job_title: Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
            
                job_description: Joi.string()
                    .min(10)
                    .max(100)
                    .required(),
                company: Joi.string()
                    .required()
            }),
        updateJob: () => 
            Joi.object({
                title: Joi.string()
                    .min(3)
                    .max(30),
            
                job_description: Joi.string()
                    .min(10)
                    .max(100),

                company: Joi.string()
            }),
    }
    try {
       const {error } =  validationObjects[schemaName]().validate(req.body)
       if(!error) {
           return next();
       }
       throw new Error(error)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }

}
