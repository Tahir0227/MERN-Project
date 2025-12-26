import { Route, Routes } from "react-router"
import { ToastContainer } from 'react-toastify'

import Login from "./Pages/Login"
import Home from "./Pages/Home"

// functional componentsy
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
