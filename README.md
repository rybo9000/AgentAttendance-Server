# AGENT ATTENDANCE API

## The Back-End application which allows administrators / instructors to take attendance for classes and meetings

**[FRONT-END GITHUB LINK](https://github.com/rybo9000/AgentAttendance)**

### What technology is this built with?

- NODEJS
- EXPRESSJS
- POSTGRESQL

### How Does It Work?

1. An administrator will need to create an account and then login
2. Once logged in an administrator will need to create classes and then add users
3. After all information is created you can start taking attendance by clicking the class links on the **Main** page.
4. Users will need to enter their username / password at the check-in page to have their attendance be recorded.
5. After attendance is taken administrators can then run an attendance report in the **Reports** section.

### Current Endpoints V 1.0 _(Refactor Coming Soon)_

**GET - /api/stats/marketcenters**
_Get total number of market centers subscribed_

**GET - /api/stats/classes**
_Get total number of classes created_

**GET - /api/stats/agents**
_Get total number of users created_

**GET - /api/stats/checkins**
_Get total number of check-ins completed_

**GET - /api/mc/classes**
_Get list of classes for a market center_

**POST - /api/mc/classes**
_Add a new class to a market center_

**GET - /api/mc/class**
_Get a single class by ID_

**GET - /api/mc/users**
_Get a list of users for a market center_

**POST - /api/mc/users**
_Add a new user to a market center_

**GET - /api/mc/stats/totalclasses**
_Get the total number of classes for a market center_

**GET - /api/mc/stats/totalcheckins**
_Get the total number of check-ins for a market center_

**GET - /api/mc/stats/totalagents**
_Get the total number of users for a market center_

**GET - /api/mc/stats/getname**
_Get the name of a market center by ID_

**POST - /api/signup/marketcenter**
_Create a new market center_

**POST - /api/signin**
_Sign in to the application with your credentials and receive JWT_

**GET - /api/signin/classes**
_Get a full list of market centers to select for sign in_

**POST - /api/checkin**
_Check-in a user to a class_

**GET - /api/reports/byclass**
_Get a list of users completed by class_
