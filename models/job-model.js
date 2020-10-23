
const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');


const JobSchema = new mongoose.Schema({
    job_title: { type: String, required: true },
    job_description: {type: String, required: true },
    company : {type: String, required: true},
    expired: { type: Boolean, default: false },
},{timestamps: {createdAt: 'created_at', modifiedAt: 'modified_at'}
});


// plugins
JobSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Jobs', JobSchema);
