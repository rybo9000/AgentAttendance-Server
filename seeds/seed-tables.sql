/* SEED DATA INTO MARKETCENTER TABLE */

INSERT INTO marketcenter
    (id, mcname, checkins)
    VALUES
        (1, 'Georgia Central', 34),
        (2, 'Austin North', 199),
        (3, 'Portland MC', 300),
        (4, 'Iowa South MC', 199);

/* SEED DATA INTO USERS TABLE */

INSERT INTO users
    (id, firstname, lastname, username, password, lvl, email, mcid)
    VALUES
        (1, 'Ryan', 'Fielder', 'rfielder', 'testpass1234', 4, 'ryan.fielder@hotmail.com', 1),
        (2, 'John', 'Smith', 'jsmith', 'dog1997', 1, 'john.smith@aol.com', 2),
        (3, 'Penny', 'Marshall', 'pmarshall', 'asdfasdf', 1, 'pdawg99@marshall.net', 3),
        (4, 'Roberto', 'Salazar', 'rsalazar', 'testpass1234', 1, 'rsalazar@microsoft.com', 4),
        (5, 'Jonathan', 'Lipnicki', 'jlipnicki', 'littlevampire99', 2, 'pleasehireme@movies.com', 1),
        (6, 'Cindy', 'Sears', 'csears', 'bruno', 2, 'cindy24@aol.com', 2),
        (7, 'Heidi', 'Johnson', 'hjohnson', 'letmein', 3, 'heidirocksit@aol.com', 3),
        (8, 'Carmon', 'Roberts', 'croberts', 'password', 4, 'fineashell@aol.com', 4),
        (9, 'Emma', 'Stone', 'estone', 'password1234', 4, 'emma@twitter.com', 1),
        (10, 'Roger', 'Foreman', 'rforeman', 'firefighterman', 1, 'firefighter1000@grapevine.gov', 2),
        (11, 'Jimmy', 'Weatherall', 'jweatherall', 'ninj4man', 1, 'jweatherall@ctrlaltit.com', 3),
        (12, 'Ricky', 'Ricardo', 'rricardo', 'babalooooooooo', 1, 'babaloooooo@dididothat.com', 4),
        (13, 'Richard', 'Linklater', 'rlinklater', 'movieman84', 1, 'rlinklater@imdb.com', 1),
        (14, 'Lisa', 'Tarantino', 'ltarantino', 'givememoney', 1, 'lisa@yahoo.com', 2);

/* SEED DATA INTO CLASSES TABLE */

INSERT INTO classes
    (id, classname, mcid)
    VALUES
        (1, 'Orientation 101', 1),
        (2, 'Buying & Selling', 2),
        (3, 'Close The Deal', 3),
        (4, 'Financing 101', 4),
        (5, 'Intermediate Financing', 1),
        (6, 'The Next Level', 2),
        (7, 'Compliance 1', 3),
        (8, 'Compliance 2', 4),
        (9, 'Close The Deal', 1),
        (10, 'Apartments 101', 2),
        (11, 'Condos 101', 3),
        (12, 'Townhouse Tricks', 4),
        (13, 'Stay Safe Out There', 1),
        (14, 'Advertise Yourself', 2),
        (15, 'Beat Your Competition', 3),
        (16, 'Compliance Basics', 4),
        (17, 'Advertising Basics', 1),
        (18, 'Financing Basics', 2),
        (19, 'Sell Your Soul', 3),
        (20, 'Beat The Odds', 4);

/* SEED DATA INTO COMPLETED TABLE */

INSERT INTO completed
    (id, completed, userid, classid, mcid)
    VALUES
        (1, '2020-01-12', 1, 1, 1),
        (2, '2020-01-11', 2, 2, 2),
        (3, '2020-01-12', 3, 3, 3),
        (4, '2020-01-12', 4, 4, 4),
        (5, '2020-01-13', 2, 1, 1),
        (6, '2020-01-14', 3, 1, 2),
        (7, '2020-01-15', 4, 1, 3),
        (8, '2020-01-16', 1, 1, 4),
        (9, '2020-01-17', 2, 1, 1),
        (10, '2020-01-12', 3, 1, 2),
        (11, '2020-01-13', 4, 1, 3),
        (12, '2020-01-14', 1, 1, 4),
        (13, '2020-01-15', 2, 1, 1),
        (14, '2020-01-16', 3, 1, 2);
