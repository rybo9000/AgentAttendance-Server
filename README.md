# AGENT ATTENDANCE API

## The Back-End application which allows administrators / instructors to take attendance for classes and meetings

**[FRONT-END GITHUB LINK](https://github.com/rybo9000/AgentAttendance)**

### What technology is this built with?

- NODEJS
- EXPRESSJS

### How Does It Work?

1. An administrator will need to create an account and then login
2. Once logged in an administrator will need to create classes and then add users
3. After all information is created you can start taking attendance by clicking the class links on the **Main** page.
4. Users will need to enter their username / password at the check-in page to have their attendance be recorded.
5. After attendance is taken administrators can then run an attendance report in the **Reports** section.

### Current Endpoints V 1.0 *(Refactor Coming Soon)*

**/api/stats/marketcenters**
*Get total number of market centers subscribed*

**/api/stats/classes**
*Get total number of classes created*


app.use('/api/stats', statsRouter)
app.use('/api/mc', MCRouter)
app.use('/api/signup', SignupRouter)
app.use('/api/signin', SignInRouter)
app.use('/api/checkin', CheckInRouter)
app.use('/api/reports', ReportsRouter)

statsRouter    
    .route('/classes')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        StatsService.getTotalClasses(knexInstance)
            .then(results => {
                res.json(results)
            })
            .catch(next)
    })

statsRouter
    .route('/agents')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        StatsService.getTotalAgents(knexInstance)
            .then(results => {
                res.json(results)
            })
            .catch(next)
    })

statsRouter
    .route('/checkins')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        StatsService.getTotalCheckIns(knexInstance)
            .then(results => {
                res.json(results)
            })
            .catch(next)
    })
