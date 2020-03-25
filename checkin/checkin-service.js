const CheckInService = {
    verifyCredentials(knex, username, password, mcid) {
        return knex
            .select('*')
            .from('users')
            .where({ 
                username, 
                password,
                mcid
            })
    },
    verifyDuplicates(knex, userid, classid, mcid, completed) {
        return knex
            .select('*')
            .from('completed')
            .where({ 
                userid,
                classid,
                mcid,
                completed
            })
    },
    CheckIn(knex, newCheckIn) {
        return knex
            .insert(newCheckIn)
            .into('completed')
            .returning('*')
            .then(rows => {
                return rows[0]
            })  
    }
}

module.exports = CheckInService;