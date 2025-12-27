import { Navigate, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'

import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import { createContext, useState } from "react"
import Courseinfo from "./Pages/Courseinfo"
import CourseVideos from "./Pages/CourseVideos"
import MyCourses from './Pages/MyCourses';
import MySelectedCourse from './Pages/MySelectedCourse';

export const LoginContext = createContext()

function App() {

  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course-info" element={<Courseinfo />} />
          <Route path="/course-video" element={<CourseVideos />} />
          <Route path="/my-selected-courses" element={<MySelectedCourse />} />
          <Route path="/my-courses" element={<MyCourses />} />


        </Routes>
      </LoginContext.Provider>
      <ToastContainer />
    </>
  )
}

export default App
