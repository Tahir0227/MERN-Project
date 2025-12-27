const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')
const config = require('../utils/config')
const cryptojs = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()

//login
router.post('/auth/login', (req, res) => {
    const { email, password } = req.body
    const hashPass = cryptojs.SHA224(password).toString()
    const sql = 'SELECT * FROM users WHERE emial = ? and password = ?'

    pool.query(sql, [email, password], (error, data) => {
        if (error) {
            res.send(result.createResult(error))
        }
        else if (data.length == 0) {
            res.send(result.createResult('Invalid email or password'))

        }
        else {

            const user = data[0]
            const payload = {
                emial: user.emial,
                role: user.role
            }
            const token = jwt.sign(payload, config.SECRET)
            const userData = {
                token
            }

            res.send(result.createResult(null, userData))
        }
    })
})

router.get('/courses/all-active-courses', (req, res) => {
    const sql = 'SELECT * FROM course WHERE CURDATE() < start_date;'
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/courses/getInfo/:Course_id', (req, res) => {
    const id = req.params.Course_id
    const sql = 'SELECT * FROM course WHERE course_id = ? ;'
    pool.query(sql, [id], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.post('/student/register-to-course', (req, res) => {
    const { name, email, course_id, mobile_no } = req.body

    const sql1 = 'SELECT * FROM users WHERE emial = ?'
    pool.query(sql1, [email], (error, data) => {

        if (error)
            res.send(result.createResult(error))

        else if (data.length == 0) {
            const sql2 = 'INSERT INTO USERS(emial,password,role) VALUES (?,?,?)'
            pool.query(sql2, [email, 'sunbeam', 'student'], (error, data) => {

                const sql3 = 'INSERT INTO student(name, emial, course_id, mobile_no) VALUES(?,?,?,?)'
                pool.query(sql3, [name, email, course_id, mobile_no], (error, data) => {
                    res.send(result.createResult(error, data))
                })
            })
        }
        else {

            const sql4 = 'SELECT * FROM student WHERE emial = ? and course_id = ?'
            pool.query(sql4, [email, course_id], (error, data) => {
                if (data.length == 0) {
                    const sql5 = 'INSERT INTO student(name, emial, course_id, mobile_no) VALUES(?,?,?,?)'
                    pool.query(sql5, [name, email, course_id, mobile_no], (error, data) => {
                        res.send(result.createResult(error, data))
                    })
                }
                else {
                    res.send(result.createResult('Already registerd to this course'))
                }
            })



        }
    })


})

module.exports = router