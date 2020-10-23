const permissions = [

    'create user',
    'view any user',
    'view user',
    'update user',
    'remove user',

    'create job',
    'view job',
    'view any job',
    'update job',
    'remove job',

]

const roles = {
    admin: [...permissions],
    user: [
        'view job',
        'view any job'
    ]
}

const users = [
    {
        name: 'admin',
        email: 'super@admin.com',
        password: 'superuser',
        roles: ['admin']
    }
]

const jobs = [
    {
        job_title: 'NodeJS developer',
        job_description: "Someone who has experience on NodeJS, and express framework",
        company: "Gebeya"
    }
]

module.exports = { permissions, roles, users, jobs }
