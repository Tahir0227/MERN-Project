import { Navigate, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'

import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import { createContext, useState } from "react"
import Courseinfo from "./Pages/Courseinfo"
import MyCourses from "./Pages/MyCourses"
<<<<<<< HEAD
import MySelectedCourse from "./Pages/MySelectedCourse"
=======
import MyProfile from "./Pages/MyProfile"
import AdminHome from "./AdminPages/AdminHome"
import AddNewCourse from "./AdminPages/AddNewCourse"
import AllCourses from "./AdminPages/AllCourses"
import UpdateCourse from "./AdminPages/UpdateCourse"
import CourseVideos from "./Pages/CourseVideos"
>>>>>>> 38d318c874a98170abbf268cc59eed508e2ab987

export const LoginContext = createContext()

function App() {
 
  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registerCourse/:id" element={<Register />} />
          <Route path="/course-info/:id" element={<Courseinfo />} />
          <Route path="/my-course" element={<MyCourses />} />
<<<<<<< HEAD
          <Route path="/my-course-info/:id" element={<MySelectedCourse />} />
=======
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/add-new-course" element={<AddNewCourse />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/update-course/:id" element={<UpdateCourse />} />
          <Route path="/courses-videos" element={<CourseVideos />} />

>>>>>>> 38d318c874a98170abbf268cc59eed508e2ab987


        </Routes>
      </LoginContext.Provider>
      <ToastContainer />
    </>
  )
}

export default App
