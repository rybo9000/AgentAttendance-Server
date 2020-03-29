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

### Current Endpoints V 1.0 *(Refactor Coming Soon)*

**GET - /api/stats/marketcenters**
*Get total number of market centers subscribed*

**GET - /api/stats/classes**
*Get total number of classes created*

**GET - /api/stats/agents**
*Get total number of users created*

**GET - /api/stats/checkins**
*Get total number of check-ins completed*

**GET - /api/mc/classes**
*Get list of classes for a market center*

**POST - /api/mc/classes**
*Add a new class to a market center*

**GET - /api/mc/class**
*Get a single class by ID*

**GET - /api/mc/users**
*Get a list of users for a market center*

**POST - /api/mc/users**
*Add a new user to a market center*

**GET - /api/mc/stats/totalclasses**
*Get the total number of classes for a market center*

**GET - /api/mc/stats/totalcheckins**
*Get the total number of check-ins for a market center*

**GET - /api/mc/stats/totalagents**
*Get the total number of users for a market center*

**GET - /api/mc/stats/getname**
*Get the name of a market center by ID*

**POST - /api/signup/marketcenter**
*Create a new market center*

**POST - /api/signin**
*Sign in to the application with your credentials and receive JWT*

**GET - /api/signin/classes**
*Get a full list of market centers to select for sign in*

**POST - /api/checkin**
*Check-in a user to a class*

**GET - /api/reports/byclass**
*Get a list of users completed by class*