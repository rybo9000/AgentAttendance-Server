/* DROP MCID COLUMN IN USERS TABLE */
ALTER TABLE users DROP COLUMN mcid;

/* DROP MCID COLUMN IN USERS TABLE */
ALTER TABLE classes DROP COLUMN mcid;

/* DROP COLUMNS IN COMPLETED TABLE */
    
ALTER TABLE completed DROP COLUMN userid;

ALTER TABLE completed DROP COLUMN classid;

ALTER TABLE completed DROP COLUMN mcid;