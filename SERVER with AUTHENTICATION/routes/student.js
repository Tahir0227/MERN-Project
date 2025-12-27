const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

// router.post('/register-to-course', (req, res) => {
//     const { name, email, course_id, mobile_no } = req.body

//     const sql1 = 'SELECT * FROM users WHERE emial = ?'
//     pool.query(sql1, [email], (error, data) => {

//         if (error)
//             res.send(result.createResult(error))

//         else if (data.length == 0) {
//             const sql2 = 'INSERT INTO USERS(emial,password,role) VALUES (?,?,?)'
//             pool.query(sql2, [email, 'sunbeam', 'student'], (error, data) => {

//                 const sql3 = 'INSERT INTO student(name, emial, course_id, mobile_no) VALUES(?,?,?,?)'
//                 pool.query(sql3, [name, email, course_id, mobile_no], (error, data) => {
//                     res.send(result.createResult(error, data))
//                 })
//             })
//         }
//         else {

//             const sql4 = 'SELECT * FROM student WHERE emial = ? and course_id = ?'
//             pool.query(sql4, [email, course_id], (error, data) => {
//                 if (data.length == 0) {
//                     const sql5 = 'INSERT INTO student(name, emial, course_id, mobile_no) VALUES(?,?,?,?)'
//                     pool.query(sql5, [name, email, course_id, mobile_no], (error, data) => {
//                         res.send(result.createResult(error, data))
//                     })
//                 }
//                 else {
//                     res.send(result.createResult('Already registerd to this course'))
//                 }
//             })



//         }
//     })


// })

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
    const sql = 'SELECT c.* FROM course c JOIN student s ON c.Course_id = s.course_id WHERE s.emial = ?'
    pool.query(sql, [email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/my-course-with-videos', (req, res) => {
    const email = req.headers.email
    const sql = `SELECT c.course_id, c.course_name, v.video_id, v.title, v.youtube_url, v.added_at,c.video_expire_days 
                 FROM student s 
                 INNER JOIN course c ON s.course_id = c.course_id 
                 INNER JOIN videos v ON v.course_id = c.course_id 
                 WHERE s.emial = ? AND DATEDIFF(CURDATE(), v.added_at) <= c.video_expire_days`
    pool.query(sql, [email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})



module.exports = router