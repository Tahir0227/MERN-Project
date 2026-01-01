CREATE DATABASE sunbeam1;
USE sunbeam1;

CREATE TABLE users(
    emial varchar(20),
    password varchar(20),
    role ENUM('admin','student')
);

CREATE TABLE Course(
    Course_id int PRIMARY KEY AUTO_INCREMENT,
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
    FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE
);

CREATE TABLE videos(
    video_id int PRIMARY KEY AUTO_INCREMENT,
    course_id int,
    title varchar(20),
    description varchar(50),
    youtube_url varchar(50),
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE
);


INSERT INTO users (emial, password, role) VALUES
('admin@school.com', 'adminpass', 'admin'),
('alice@example.com', 'alicepwd', 'student'),
('bob@example.com', 'bobpwd123', 'student'),
('charlie@example.com', 'charpwd', 'student'),
('diana@example.com', 'dianapwd', 'student'),
('frank@example.com', 'frankpwd', 'student'),
('uday@example.com', 'sunbeam', 'student'),
('will@example.com', 'sunbeam', 'student'),
('admin@site.com', 'admin123', 'admin'),
('student1@gmail.com', 'stud123', 'student'),
('student2@gmail.com', 'stud123', 'student'),
('student3@gmail.com', 'stud123', 'student');

INSERT INTO Course (Course_id, course_name, description, fees, start_date, end_date, video_expire_days) VALUES
(7, 'Gen AI', 'Generative AI with LLMs and tools', 25000, '2026-02-05', '2026-06-05', 240),
(8, 'Cyber Security', 'Ethical hacking and cyber security basics', 22000, '2026-02-10', '2026-06-10', 240),
(10, 'Web Development', 'HTML, CSS, JavaScript full stack basics', 17000, '2026-02-25', '2026-06-25', 210),
(11, 'Java', 'Core and Advanced Java', 28000, '2026-02-05', '2026-05-05', 180),
(12, 'Python', 'Python with Data Handling', 26000, '2026-02-10', '2026-05-10', 180),
(13, 'WebDev', 'HTML CSS JavaScript React', 32000, '2026-02-15', '2026-05-15', 200),
(14, 'MERN', 'Mongo Express React Node', 36000, '2026-02-20', '2026-05-20', 210),
(15, 'AI', 'AI and Machine Learning Basics', 48000, '2026-02-25', '2026-06-25', 270),
(16, 'CloudComp', 'Cloud Computing Fundamentals', 38000, '2025-12-03', '2026-01-18', 200),
(17, 'CyberSec', 'Cyber Security Essentials', 42000, '2025-12-08', '2026-01-22', 220),
(18, 'DevOps', 'DevOps Tools and CI/CD', 40000, '2025-12-12', '2026-01-28', 210),
(19, 'DataEng', 'Data Engineering Basics', 45000, '2025-12-18', '2026-01-30', 240),
(20, 'UIUX', 'UI/UX Design Principles', 28000, '2025-12-20', '2026-01-25', 180),
(21, 'IoT', 'Internet of Things with sensors', 30000, '2026-01-10', '2026-04-10', 180),
(22, 'DSA', 'Data Structures and Algorithms', 8000, '2025-12-31', '2026-02-28', 180);

INSERT INTO videos (video_id, course_id, title, description, youtube_url, added_at) VALUES
(1, 7, 'GenAI Intro', 'Introduction to Generative AI', 'https://youtu.be/genai01', '2025-12-30 21:33:28'),
(2, 7, 'LLM Basics', 'Understanding large language models', 'https://youtu.be/genai02', '2025-12-30 21:33:28'),
(3, 8, 'Cyber Intro', 'Basics of cyber security', 'https://youtu.be/cyber01', '2025-12-30 21:33:28'),
(4, 8, 'Ethical Hack', 'Ethical hacking overview', 'https://youtu.be/cyber02', '2025-12-30 21:33:28'),
(5, 10, 'HTML Basics', 'HTML fundamentals', 'https://youtu.be/webdev01', '2025-12-30 21:33:28'),
(6, 10, 'JS Basics', 'JavaScript introduction', 'https://youtu.be/webdev02', '2025-12-30 21:33:28'),
(7, 11, 'Java Intro', 'Java programming basics', 'https://youtu.be/java01', '2025-12-30 21:33:28'),
(8, 11, 'OOP Java', 'Object oriented concepts', 'https://youtu.be/java02', '2025-12-30 21:33:28'),
(9, 12, 'Python Intro', 'Python fundamentals', 'https://youtu.be/python01', '2025-12-30 21:33:28'),
(10, 12, 'Data Handling', 'Handling data in Python', 'https://youtu.be/python02', '2025-12-30 21:33:28'),
(11, 14, 'MERN Intro', 'Full stack MERN overview', 'https://youtu.be/mern01', '2025-12-30 21:33:28'),
(12, 14, 'React Intro', 'React fundamentals', 'https://youtu.be/mern02', '2025-12-30 21:33:28'),
(13, 11, 'Java Collections', 'Collections Framework Overview', 'https://youtu.be/java-collections', '2025-12-30 22:28:30'),
(18, 7, 'GenAI Advance', 'covers advance topics in AI', 'https://youtu.be/genai03', '2025-12-30 22:41:10');

INSERT INTO student (reg_no, name, emial, course_id, mobile_no, profile_pic) VALUES
(1, 'Amit', 'student1@gmail.com', 7, '9876543210', NULL),
(2, 'Neha', 'student2@gmail.com', 11, '9876501234', NULL),
(3, 'Rahul', 'student3@gmail.com', 16, '9123456789', NULL),
(4, 'Alice', 'alice@example.com', 7, '9876500001', NULL),
(5, 'Bob', 'bob@example.com', 8, '9876500002', NULL),
(6, 'Charlie', 'charlie@example.com', 11, '9876500003', NULL),
(7, 'Diana', 'diana@example.com', 12, '9876500004', NULL),
(8, 'Frank', 'frank@example.com', 14, '9876500005', NULL),
(9, 'Uday', 'uday@example.com', 16, '9876500006', NULL),
(10, 'Will', 'will@example.com', 18, '9876500007', NULL);