import React from 'react'
import { Link, useLocation } from 'react-router'

function DefaultNavbar() {
    const location = useLocation();

    // Helper to check if link is active
    const isActive = (path) => location.pathname === path || location.hash === path;

    return (
        <nav className="sticky top-0 z-[100] w-full bg-emerald-600/95 backdrop-blur-md border-b border-white/10 shadow-xl">
            <div className="px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* LEFT CORNER: Branding Group */}
                    <div className="flex items-center">
                        <Link
                            to="/home"
                            className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition px-5 py-2.5 rounded-[1.25rem] border border-white/10 group shadow-sm"
                        >

                            <span className="text-xl font-black text-white tracking-tighter uppercase">
                                SUN<span className="text-emerald-200">BEAM</span>
                            </span>
                        </Link>
                    </div>

                    {/* CENTER: Primary Navigation Group */}
                    <div className="hidden md:flex items-center gap-3 bg-black/10 p-1.5 rounded-[1.5rem] border border-white/5 shadow-inner">
                        <Link
                            to="/home"
                            className={`px-8 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${isActive('/home') && !location.hash
                                ? 'bg-white text-emerald-700 shadow-lg scale-[1.02]'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            Home
                        </Link>

                    </div>

                    {/* RIGHT CORNER: Login & Mobile Toggle */}
                    <div className="flex items-center gap-6">

                        {/* Live Status Placeholder (Matching Admin style) */}
                        <div className="hidden lg:flex flex-col items-end opacity-60">
                            <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Access</span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-[10px] font-bold text-emerald-50 uppercase tracking-widest leading-none">Guest Mode</span>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-white/20 hidden md:block"></div>

                        {/* Login Button - High Contrast */}
                        <Link
                            to="/login"
                            className="flex items-center gap-2 px-8 py-3 text-[11px] font-black text-emerald-700 uppercase tracking-[0.3em] bg-white hover:bg-emerald-50 rounded-2xl transition-all shadow-2xl shadow-emerald-900/20 group hover:-translate-y-0.5 active:scale-95"
                        >
                            <span>Login</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M11 16l4-4m0 0l-4-4m4 4H3m13 4a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </Link>

                        {/* Mobile Dropdown (Hamburger) */}
                        <div className="md:hidden dropdown">
                            <button
                                className="text-white p-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end mt-4 shadow-2xl border-none rounded-2xl p-2 bg-white/95 backdrop-blur-xl">
                                <li>
                                    <Link to="/home" className="dropdown-item rounded-xl py-2.5 font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses" className="dropdown-item rounded-xl py-2.5 font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">
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

export default DefaultNavbar