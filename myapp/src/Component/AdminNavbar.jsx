import React from 'react'
import { Link, useLocation } from 'react-router'
import { useContext } from 'react'
import { LoginContext } from '../App'
import { useNavigate } from 'react-router'

function AdminNavbar() {

    const { loginStatus, setLoginStatus } = useContext(LoginContext)
    const navigate = useNavigate()
    const location = useLocation();

    // Helper to check if link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-[100] w-full bg-emerald-600/95 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="px-6 lg:px-10">
                <div className="flex items-center justify-between h-20">

                    {/* LEFT CORNER: Admin Identity */}
                    <div className="flex items-center">
                        <Link

                            className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-2xl border border-white/10 group shadow-sm"
                        >
                            <div className="hidden sm:block">
                                <span className="block text-sm font-bold text-white leading-none">
                                    Admin Portal SUNBEAM
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* CENTER: Primary Navigation */}
                    <div className="hidden md:flex items-center gap-2 bg-black/10 p-1.5 rounded-2xl border border-white/5 shadow-inner">
                        <Link
                            to="/admin-home"
                            className={`px-8 py-2.5 text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all ${isActive('/admin-home')
                                ? 'bg-white text-emerald-700 shadow-xl'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            Home
                        </Link>
                    </div>

                    {/* RIGHT CORNER: Logout & System Status */}
                    <div className="flex items-center gap-6">

                        {/* Live Status Ticker */}
                        <div className="hidden lg:flex flex-col items-end opacity-60">
                            <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Network</span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <div className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-50 uppercase tracking-widest leading-none">Online</span>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-white/20 hidden md:block"></div>

                        {/* Logout Button - Anchored to right corner */}
                        <button
                            onClick={() => {
                                localStorage.removeItem('token');
                                setLoginStatus(false);
                                navigate("/home");
                            }}
                            className="flex items-center gap-2 px-6 py-2.5 text-[11px] font-black text-white uppercase tracking-[0.3em] bg-red-500/80 hover:bg-red-600 rounded-xl transition-all shadow-xl shadow-red-900/20 group hover:-translate-y-0.5"
                        >
                            <span>Logout</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                            </svg>
                        </button>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button className="text-white p-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
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

export default AdminNavbar