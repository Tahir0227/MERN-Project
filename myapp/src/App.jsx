import { Navigate, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'

import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import { createContext, useState } from "react"
import Courseinfo from "./Pages/Courseinfo"
import MyCourses from "./Pages/MyCourses"
import MySelectedCourse from "./Pages/MySelectedCourse"

import AddCourse from "./AdminPages/AddNewCourse"
import AdminHome from "./AdminPages/AdminHome"
import AllCourses from "./AdminPages/AllCourses"
import UpdateCourse from "./AdminPages/UpdateCourse"
import MyProfile from "./Pages/MyProfile"
import CourseVideos from "./Pages/CourseVideos"

import EditProfile from "./Pages/EditProfile"
import AddNewCourse from "./AdminPages/AddNewCourse"
import AllVideos from "./AdminPages/AllVideos"
import AllStudent from "./AdminPages/AllStudent"
import AddNewVideo from "./AdminPages/AddNewVideo"
import UpdateVideo from "./AdminPages/UpdateVideo"

export const LoginContext = createContext()

function App() {

  const [loginStatus, setLoginStatus] = useState(false)
  //means loginstaus variable is global anyone can change this value 
  return (
    <>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registerCourse/:id" element={<Register />} />
          <Route path="/course-info/:id" element={<Courseinfo />} />
          <Route path="/my-course" element={<MyCourses />} />
          <Route path="/my-course-info/:id" element={<MySelectedCourse />} />
          <Route path="/my-course/videos/:id" element={<CourseVideos />} />

          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/update-course" element={<UpdateCourse />} />
          <Route path="/profile" element={<MyProfile />} />



          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/add-new-course" element={<AddNewCourse />} />
          <Route path="/all-videos" element={<AllVideos />} />
          <Route path="/all-student" element={<AllStudent />} />
          <Route path="/add-new-video" element={<AddNewVideo />} />
          <Route path="/update-video" element={<UpdateVideo />} />





        </Routes>
      </LoginContext.Provider>
      <ToastContainer />
    </>
  )
}

export default App
