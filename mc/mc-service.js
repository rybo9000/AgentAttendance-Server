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
    }

}

module.exports = MCService;