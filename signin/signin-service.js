const SignInService = {
    login(knex, username, password, mcid) {
        return knex
            .select('*')
            .from('users')
            .where({ 
                username, 
                password,
                mcid
            })
    },
    getMarketCenters(knex) {
        return knex
            .select('*')
            .from('marketcenter')
    },
}

module.exports = SignInService;