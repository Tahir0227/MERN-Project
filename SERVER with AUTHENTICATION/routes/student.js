const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

router.post('/register-to-course', (req, res) => {
    const {name, email, course_id, mobile_no} = req.body

    const sql1 = 'SELECT * FROM users WHERE emial = ?'
    pool.query(sql1, [email] ,(error,data) => {
        
        if(error)
            res.send(result.createResult(error))

        else if(data.length == 0){
            res.send(result.createResult(error,"Need to Sign-up"))
        }
        else{
            const sql2 = 'INSERT INTO student(name, emial, course_id, mobile_no) VALUES(?,?,?,?)'
            pool.query(sql2, [name, email, course_id, mobile_no] ,(error,data) => {
            res.send(result.createResult(error, data))
            })
            
        }
    })

    
})

router.put('/change-password', (req, res) => {
    const email = req.headers.email
    const {new_pass,conf_pass} = req.body
    const sql = 'UPDATE users SET password = ? WHERE emial = ?'

    pool.query(sql, [conf_pass, email] ,(error,data) => {
        res.send(result.createResult(error, data))
    })
})




module.exports = router