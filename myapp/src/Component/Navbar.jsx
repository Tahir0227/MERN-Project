import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <nav className="sticky-top bg-emerald-600 w-full shadow-md">
            <div className="px-4">
                <div className="flex items-center justify-between h-16">

                    {/* LEFT: Profile */}
                    <Link
                        to="/my-profile"
                        className="flex items-center gap-2 text-white hover:opacity-90 transition"
                    >
                        <img
                            src="https://via.placeholder.com/36"
                            alt="profile"
                            className="w-9 h-9 rounded-full object-cover border-2 border-white"
                        />
                        <span className="font-semibold hidden sm:block">
                            Profile Name
                        </span>
                    </Link>

                    {/* CENTER: Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/home"
                            className="font-medium text-white hover:text-emerald-100 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/courses"
                            className="font-medium text-white hover:text-emerald-100 transition"
                        >
                            My Courses
                        </Link>
                    </div>

                    {/* RIGHT: Logout + Mobile Dropdown */}
                    <div className="flex items-center gap-3 relative">

                        {/* Logout */}
                        <Link
                            to="/"
                            className="px-4 py-2 text-sm font-semibold
                         bg-white text-emerald-600
                         rounded-lg hover:bg-emerald-100
                         transition"
                        >
                            Logout
                        </Link>

                        {/* ☰ Mobile Dropdown */}
                        <div className="md:hidden dropdown">
                            <button
                                className="text-white text-xl"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                ☰
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end mt-2 shadow">
                                <li>
                                    <Link to="/home" className="dropdown-item">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses" className="dropdown-item">
                                        My Courses
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar