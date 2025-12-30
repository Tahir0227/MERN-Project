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





INSERT INTO users (emial, password, role) VALUES
('admin@school.com',    'adminpass', 'admin'),
('alice@example.com',   'alicepwd',  'student'),
('bob@example.com',     'bobpwd123', 'student'),
('charlie@example.com', 'charpwd',   'student'),
('diana@example.com',   'dianapwd',  'student'),
('frank@example.com',   'frankpwd',  'student'),
('uday@example.com',    'sunbeam',   'student'),
('will@example.com',    'sunbeam',   'student');


INSERT INTO course
(Course_id, course_name, description, fees, start_date, end_date, video_expire_days)
VALUES
(1, 'Python', 'Comprehensive Python course', 5000, '2026-01-10', '2026-03-10', 60),
(2, 'Java', 'Java Programming', 6000, '2025-12-20', '2026-02-20', 30),
(3, 'HTML', 'HTML Basics', 3000, '2025-11-01', '2025-12-01', 30),
(4, 'CSS', 'CSS Styling', 3500, '2025-12-13', '2026-01-13', 15),
(5, 'JS', 'JavaScript Fundamentals', 7000, '2025-10-01', '2025-12-01', 45),
(6, 'PHP', 'PHP Web Dev', 6500, '2026-02-01', '2026-04-01', 90),
(7, 'Gen AI', 'Generative AI with LLMs and tools', 25000, '2026-02-05', '2026-06-05', 240),
(8, 'Cyber Security', 'Ethical hacking and cyber security basics', 22000, '2026-02-10', '2026-06-10', 240),
(9, 'Android Development', 'Android app development using Java & Kotlin', 20000, '2026-02-15', '2026-05-15', 180),
(10, 'Web Development', 'HTML, CSS, JavaScript full stack basics', 17000, '2026-02-25', '2026-06-25', 210);


INSERT INTO student
(reg_no, name, emial, course_id, mobile_no, profile_pic)
VALUES
(1, 'Alice Johnson', 'alice@example.com', 1, 9876543210, NULL),
(2, 'Bob Martin', 'bob@example.com', 2, 9123456780, NULL),
(3, 'Charlie Day', 'charlie@example.com', 3, 9988776655, NULL),
(4, 'Diana Prince', 'diana@example.com', 4, 9090909090, NULL),
(5, 'Eve Adams', 'eve@example.com', 5, 8888888888, NULL),
(6, 'Frank Underwood', 'frank@example.com', 6, 7777777777, NULL),
(9, 'Bob Martin', 'bob@example.com', 6, 9123456780, NULL),
(10, 'Bob Martin', 'bob@example.com', 1, 9123456780, NULL),
(14, 'Bob Martin', 'bob@example.com', 3, 9123456780, NULL),
(15, 'Uday Patil', 'uday@example.com', 3, 9123456780, NULL),
(18, 'Uday patil', 'uday@example.com', 6, 9123456780, NULL),
(19, 'Willl Bayes', 'will@example.com', 6, 9876543210, NULL);


INSERT INTO videos
(video_id, course_id, title, description, youtube_url, added_at)
VALUES
(1, 1, 'Python Intro', 'Intro to Python', 'https://youtu.be/py-intro', '2025-11-20 10:00:00'),
(2, 1, 'Python Basics', 'Variables & types', 'https://youtu.be/py-basics', '2025-09-01 09:00:00'),
(3, 2, 'Java Intro', 'Java basics', 'https://youtu.be/java-intro', '2025-12-01 11:00:00'),
(4, 3, 'HTML Tags', 'HTML tags explained', 'https://youtu.be/html-tags', '2025-11-05 12:00:00'),
(5, 4, 'CSS Selectors', 'CSS selectors', 'https://youtu.be/css-sel', '2025-12-05 08:00:00'),
(6, 6, 'PHP Intro', 'Intro to PHP', 'https://youtu.be/php-intro', '2025-11-01 07:00:00'),
(7, 2, 'Java Intro', 'Basics of Java programming', 'https://youtu.be/java-intro', '2025-12-01 10:00:00'),
(8, 2, 'Java OOP Basics', 'Understanding OOP in Java', 'https://youtu.be/java-oop', '2025-12-10 09:00:00'),
(11, 2, 'Java Collections', 'Collections Framework Overview', 'https://youtu.be/java-collections-part2', '2025-12-21 19:30:57');

