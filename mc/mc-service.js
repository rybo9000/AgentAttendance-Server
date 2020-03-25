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
        return knex('users')
            .returning('*')
            .insert({
                firstname: username.firstname,
                lastname: username.lastname,
                username: username.username,
                password: username.password,
                lvl: username.lvl,
                email: username.email,
                mcid: username.mcid
            })
            
            

    },
    checkForUserName(knex, username, mcid) {
        return knex('users').where({username, mcid}).count('*')
    },
    getTotalClasses(knex, mcid) {
        return knex('classes').where({ mcid }).count('*')
    },
    getTotalCheckIns(knex, mcid) {
        return knex('completed').where({ mcid }).count('*')
    },
    getTotalAgents(knex, mcid) {
        return knex('users').where({ mcid }).count('*')
    },
    getMCName(knex, mcid) {
        return knex
            .select('mcname')
            .from('marketcenter')
            .where ({ id: mcid })
    }

}

module.exports = MCService;