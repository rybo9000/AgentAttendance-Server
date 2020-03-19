const MCService = {
    listClasses(knex, mcid) {
        return knex
            .select('*')
            .from('classes')
            .where({ mcid })
    },
    listUsers(knex, mcid) {
        return knex
            .select('*')
            .from('users')
            .where({ mcid })
    },
    addClass(knex, classname) {
        return knex
            .insert(classname)
            .into('classes')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    addUser(knex, username) {
        return knex
            .insert(username)
            .into('users')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    checkForUserName(knex, username) {
        return knex('users').where({username}).count('*')
    }

}

module.exports = MCService;