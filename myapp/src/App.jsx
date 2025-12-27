import { Navigate, Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'

import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import { createContext, useState } from "react"
import Courseinfo from "./Pages/Courseinfo"
import MyCourses from "./Pages/MyCourses"

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


        </Routes>
      </LoginContext.Provider>
      <ToastContainer />
    </>
  )
}

export default App
