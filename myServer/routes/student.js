const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()



router.put('/change-password', (req, res) => {
    const email = req.headers.email
    const { new_pass, conf_pass } = req.body
    const sql = 'UPDATE users SET password = ? WHERE emial = ?'

    pool.query(sql, [conf_pass, email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/my-courses', (req, res) => {
    const email = req.headers.email
    const sql = 'SELECT c.* FROM course c JOIN student s ON c.Course_id = s.course_id WHERE s.emial = ? AND CURDATE()<=c.end_date'
    pool.query(sql, [email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/my-course-with-videos/:Course_id', (req, res) => {
    const email = req.headers.email
    const Course_id = req.params.Course_id
    const sql = `SELECT c.*, v.video_id, v.title, v.youtube_url, v.added_at,c.video_expire_days 
                 FROM student s 
                 INNER JOIN course c ON s.course_id = c.course_id 
                 INNER JOIN videos v ON v.course_id = c.course_id 
                 WHERE s.emial = ? AND DATEDIFF(CURDATE(), v.added_at) <= c.video_expire_days AND c.course_id = ?;`
    pool.query(sql, [email, Course_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})


router.get('/my-course/video/:video_id', (req, res) => {
    const video_id = req.params.video_id
    const sql = `SELECT c.*, v.* 
                 FROM course c 
                 INNER JOIN videos v ON v.course_id = c.course_id 
                 WHERE v.video_id = ?;`
    pool.query(sql, [video_id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/myProfile', (req, res) => {
    const email = req.headers.email
    const sql = 'SELECT * FROM student WHERE emial = ? LIMIT 1'
    pool.query(sql, [email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.put('/updateProfile', (req, res) => {
    const email = req.headers.email
    const { name, mobileNo, password } = req.body
    const sql = 'UPDATE student s JOIN users u ON s.emial = u.emial SET s.name = ?, s.mobile_no = ?, u.password = ? WHERE s.emial = ?'

    pool.query(sql, [name, mobileNo, password, email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router