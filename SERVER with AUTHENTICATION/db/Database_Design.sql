CREATE DATABASE sunbeam1;
USE sunbeam1;

CREATE TABLE users(
    emial varchar(20),
    password varchar(20),
    role ENUM('admin','student')
);

CREATE TABLE Course(
    Course_id int PRIMARY KEY,
    course_name varchar(20),
    description varchar(50),
    fees int,
    start_date Date,
    end_date Date,
    video_expire_days int
);

CREATE TABLE student(
    reg_no int PRIMARY KEY AUTO_INCREMENT,
    name varchar(20),
    emial varchar(20),
    course_id int,
    mobile_no VARCHAR(20),
    profile_pic BLOB,
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

CREATE TABLE videos(
    video_id int PRIMARY KEY AUTO_INCREMENT,
    course_id int,
    title varchar(20),
    description varchar(50),
    youtube_url varchar(50),
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

