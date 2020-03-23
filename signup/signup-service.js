const SignupService = {
    findExistingMC(knex, kwid) {
        return knex('marketcenter').where({kwid}).count('*')
    },
    createNewMC(knex, mcinfo) {
        return knex
            .insert(mcinfo)
            .into('marketcenter')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    createNewAdmin(knex, newAdmin) {
        return knex
            .insert(newAdmin)
            .into('users')
            .returning('*')
            .then(rows => {
                return rows[0]
            })  
    }
}

module.exports = SignupService;