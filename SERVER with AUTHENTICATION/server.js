const express = require("express")
const app = express()

const courseRouter = require('./routes/courses')
const videosRouter = require('./routes/videos')
const userRouter = require('./routes/users')
const authUser = require('./utils/auth')

app.use(express.json())
// app.use(authUser)
app.use('/courses', courseRouter)
app.use('/videos', videosRouter)
app.use('/auth',userRouter)

app.listen(4000, 'localhost', (req, res) => {
    console.log("Server started at 4000")
})
