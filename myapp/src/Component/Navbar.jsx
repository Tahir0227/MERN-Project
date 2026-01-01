import React from 'react'
import { Link, useLocation } from 'react-router'
import { useContext } from 'react'
import { LoginContext } from '../App'
import { useNavigate } from 'react-router'

function Navbar() {
    const { loginStatus, setLoginStatus } = useContext(LoginContext)
    const navigate = useNavigate()

    const location = useLocation();

    // Helper to check if link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-[100] w-full bg-emerald-600/95 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* LEFT: Branding/Logo */}
                    <div className="flex items-center gap-8">
                        <Link to="/home" className="flex items-center gap-2 group">
                            <div className="bg-white p-1.5 rounded-xl shadow-inner group-hover:rotate-3 transition-transform">
                                <svg className="w-7 h-7 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                                </svg>
                            </div>
                            <span className="text-xl font-black text-white tracking-tighter uppercase">
                                SUN<span className="text-emerald-200">BEAM</span>
                            </span>
                        </Link>

                        {/* CENTER: Desktop Links */}
                        <div className="hidden md:flex items-center gap-1 bg-white/10 p-1 rounded-2xl border border-white/5">
                            <Link
                                to="/home"
                                className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${isActive('/home')
                                    ? 'bg-white text-emerald-700 shadow-md'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/my-course"
                                className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${isActive('/my-course')
                                    ? 'bg-white text-emerald-700 shadow-md'
                                    : 'text-white hover:bg-white/10'
                                    }`}
                            >
                                My Courses
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: User Profile & Logout */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/profile"
                            className="flex items-center gap-3 bg-emerald-700/50 hover:bg-emerald-700 transition px-3 py-1.5 rounded-full border border-white/10 group"
                        >
                            <img
                                src="https://via.placeholder.com/36"
                                alt="profile"
                                className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400 group-hover:scale-105 transition-transform"
                            />
                            <span className="hidden lg:block text-xs font-black text-white uppercase tracking-widest">
                                Student Portal
                            </span>
                        </Link>

                        <div className="h-8 w-px bg-white/20 hidden md:block"></div>

                        <button
                            onClick={() => {
                                localStorage.removeItem('token');
                                setLoginStatus(false);
                                navigate("/")
                            }}
                            className="px-5 py-2 text-xs font-black text-white uppercase tracking-[0.2em] bg-red-500/80 hover:bg-red-600 rounded-xl transition shadow-lg shadow-red-900/20"
                        >
                            Logout
                        </button>


                        {/* Mobile Menu Icon (Hamburger) */}
                        <div className="md:hidden">
                            <button className="text-white p-2 bg-white/10 rounded-xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar