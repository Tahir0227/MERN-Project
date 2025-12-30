import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'

function Dashboard() {
    const [openMenu, setOpenMenu] = useState(null)
    const location = useLocation()

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu)
    }

    const isActive = (path) => location.pathname === path

    return (
        /* Increased width to w-72 to support larger text */
        <aside className="fixed top-20 left-0 w-72 h-[calc(100vh-5rem)] bg-slate-950 text-white shadow-2xl z-40 border-r border-white/5">

            <div className="flex flex-col h-full p-6">

                {/* 1. Sidebar Header - Larger Text */}
                <div className="px-2 mb-10">
                    <p className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-2">Management</p>
                    <h2 className="text-2xl font-black text-white tracking-tight">System Admin</h2>
                </div>

                {/* 2. Navigation List */}
                <div className="space-y-3 flex-grow overflow-y-auto custom-scrollbar pr-1">

                    {/* STUDENTS SECTION */}
                    <div className="space-y-2">
                        <button
                            onClick={() => toggleMenu('students')}
                            className={`w-full flex justify-between items-center px-5 py-4 rounded-2xl transition-all duration-300 group ${openMenu === 'students' ? 'bg-emerald-500/10 text-emerald-400' : 'hover:bg-white/5 text-slate-400'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <svg className={`w-6 h-6 transition-colors ${openMenu === 'students' ? 'text-emerald-500' : 'group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span className="text-lg font-bold tracking-wide">Students</span>
                            </div>
                            <svg className={`w-5 h-5 transition-transform duration-300 ${openMenu === 'students' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>

                        {openMenu === 'students' && (
                            <div className="ml-10 space-y-2 border-l-2 border-emerald-500/30 pl-6 mt-2">
                                <Link to="/all-students" className={`block py-2 text-[15px] font-semibold transition-colors ${isActive('/all-students') ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}>
                                    All Students
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* COURSES SECTION */}
                    <div className="space-y-2">
                        <button
                            onClick={() => toggleMenu('courses')}
                            className={`w-full flex justify-between items-center px-5 py-4 rounded-2xl transition-all duration-300 group ${openMenu === 'courses' ? 'bg-emerald-500/10 text-emerald-400' : 'hover:bg-white/5 text-slate-400'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <svg className={`w-6 h-6 transition-colors ${openMenu === 'courses' ? 'text-emerald-500' : 'group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span className="text-lg font-bold tracking-wide">Courses</span>
                            </div>
                            <svg className={`w-5 h-5 transition-transform duration-300 ${openMenu === 'courses' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>

                        {openMenu === 'courses' && (
                            <div className="ml-10 space-y-2 border-l-2 border-emerald-500/30 pl-6 mt-2">
                                <Link to="/all-courses" className={`block py-2 text-[15px] font-semibold transition-colors ${isActive('/all-courses') ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}>
                                    All Courses
                                </Link>
                                <Link to="/add-new-course" className={`block py-2 text-[15px] font-semibold transition-colors ${isActive('/add-new-course') ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}>
                                    Add New Course
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* VIDEOS SECTION */}
                    <div className="space-y-2">
                        <button
                            onClick={() => toggleMenu('videos')}
                            className={`w-full flex justify-between items-center px-5 py-4 rounded-2xl transition-all duration-300 group ${openMenu === 'videos' ? 'bg-emerald-500/10 text-emerald-400' : 'hover:bg-white/5 text-slate-400'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <svg className={`w-6 h-6 transition-colors ${openMenu === 'videos' ? 'text-emerald-500' : 'group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <span className="text-lg font-bold tracking-wide">Video Library</span>
                            </div>
                            <svg className={`w-5 h-5 transition-transform duration-300 ${openMenu === 'videos' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>

                        {openMenu === 'videos' && (
                            <div className="ml-10 space-y-2 border-l-2 border-emerald-500/30 pl-6 mt-2">
                                <Link to="/all-videos" className={`block py-2 text-[15px] font-semibold transition-colors ${isActive('/all-videos') ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}>
                                    All Videos
                                </Link>
                                <Link to="/add-new-video" className={`block py-2 text-[15px] font-semibold transition-colors ${isActive('/add-new-video') ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}>
                                    Add New Video
                                </Link>
                            </div>
                        )}
                    </div>

                </div>

                {/* 3. Sidebar Footer */}
                <div className="mt-auto pt-6 border-t border-white/5 px-2">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Encrypted Console</span>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default Dashboard