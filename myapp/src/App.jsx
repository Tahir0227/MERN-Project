import { Navigate, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'

import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import { createContext, useState } from "react"
import Courseinfo from "./Pages/Courseinfo"
import MyCourses from "./Pages/MyCourses"
import MySelectedCourse from "./Pages/MySelectedCourse"

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

  const [loginStatus, setLoginStatus] = useState(!!localStorage.getItem('token'))

  return (
    <>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Home />} />
          <Route path="/registerCourse/:id" element={<Register />} />
          <Route path="/course-info/:id" element={<Courseinfo />} />
          <Route path="/my-course" element={loginStatus ? <MyCourses /> : <Navigate to="/" />} />
          <Route path="/my-course-info/:id" element={loginStatus ? <MySelectedCourse /> : <Navigate to="/" />} />
          <Route path="/my-course/videos/:id" element={loginStatus ? <CourseVideos /> : <Navigate to="/" />} />

          <Route path="/admin-home" element={loginStatus ? <AdminHome /> : <Navigate to="/" />} />
          <Route path="/all-courses" element={loginStatus ? <AllCourses /> : <Navigate to="/" />} />
          <Route path="/update-course/:id" element={loginStatus ? <UpdateCourse /> : <Navigate to="/" />} />
          <Route path="/profile" element={loginStatus ? <MyProfile /> : <Navigate to="/" />} />

          <Route path="/edit-profile" element={loginStatus ? <EditProfile /> : <Navigate to="/" />} />
          <Route path="/add-new-course" element={loginStatus ? <AddNewCourse /> : <Navigate to="/" />} />
          <Route path="/all-videos" element={loginStatus ? <AllVideos /> : <Navigate to="/" />} />
          <Route path="/all-students" element={loginStatus ? <AllStudent /> : <Navigate to="/" />} />
          <Route path="/add-new-video" element={loginStatus ? <AddNewVideo /> : <Navigate to="/" />} />
          <Route path="/update-video/:id" element={loginStatus ? <UpdateVideo /> : <Navigate to="/" />} />
        </Routes>
      </LoginContext.Provider>
      <ToastContainer />
    </>
  )
}

export default App  