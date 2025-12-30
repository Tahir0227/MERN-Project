import React, { useEffect, useState } from 'react'
import AdminNavbar from '../Component/AdminNavbar'
import Dashboard from '../Component/Dashboard'
import { getAllCourses, getAllStudent } from '../Services/adminServices'

function AllStudent() {
    const [selectedCourse, setSelectedCourse] = useState('')
    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadStudents()
        loadCourses()
    }, [])

    const loadStudents = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllStudent(token)
        if (result.status === 'success') {
            setStudents(result.data)
        }
    }

    const loadCourses = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllCourses(token)
        if (result.status === 'success') {
            setCourses(result.data)
        }
    }

    // Helper function to find course name by ID
    const getCourseName = (courseId) => {
        if (!courseId || courseId === 'N/A') return 'Unassigned';
        const course = courses.find(c => String(c.Course_id) === String(courseId));
        return course ? course.course_name : 'Loading...';
    };

    const filteredStudents =
        selectedCourse === '' || selectedCourse === 'All'
            ? students
            : students.filter(s => String(s.course_id) === String(selectedCourse))

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT - Standard ml-72 for wide sidebar */}
            <div className="ml-72 p-12 relative overflow-hidden">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.2px, transparent 1.2px)`, backgroundSize: '45px 45px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* 1. HEADER CONTROL BAR */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-14 gap-8 px-2">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="h-[3px] w-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
                                <p className="text-xs font-black text-emerald-600 uppercase tracking-[0.4em]">Administrative Portal</p>
                            </div>
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
                                Student <span className="text-slate-400 font-medium">Registry</span>
                            </h2>
                        </div>

                        {/* --- UPDATED PREMIUM GREEN DROPDOWN --- */}
                        <div className="flex items-center gap-6 bg-emerald-50/80 backdrop-blur-sm p-4 rounded-[2.5rem] shadow-lg shadow-emerald-100/50 border border-emerald-200 min-w-[420px] transition-all hover:border-emerald-400 group">
                            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-105 transition-transform">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <p className="text-[10px] font-black text-emerald-700/60 uppercase tracking-[0.2em] mb-1 ml-1">Directory Filter</p>
                                <div className="relative">
                                    <select
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                        className="w-full bg-transparent text-lg font-black text-slate-800 outline-none cursor-pointer appearance-none pr-10"
                                    >
                                        <option value="All">All Active Courses</option>
                                        {courses.map(course => (
                                            <option key={course.Course_id} value={course.Course_id}>
                                                {course.course_name}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* --- END UPDATED DROPDOWN --- */}
                    </div>

                    {/* 2. STATS PILL */}
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-3 rounded-2xl shadow-2xl shadow-slate-200">
                            <span className="text-xs font-black uppercase tracking-widest opacity-60">Database Hub</span>
                            <span className="h-5 w-px bg-white/20"></span>
                            <span className="text-lg font-black">{filteredStudents.length} Registered Learners</span>
                        </div>
                    </div>

                    {/* 3. PREMIUM DATA TABLE */}
                    <div className="bg-white rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-950 text-white">
                                        <th className="px-10 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Reg ID</th>
                                        <th className="px-10 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Student Name</th>
                                        <th className="px-10 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Contact Info</th>
                                        <th className="px-10 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80">Enrolled Course</th>
                                        <th className="px-10 py-7 text-[13px] font-black uppercase tracking-[0.25em] opacity-80 text-right">Mobile</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredStudents.map((student) => (
                                        <tr
                                            key={student.reg_no}
                                            className="group hover:bg-emerald-50/40 transition-all duration-300"
                                        >
                                            <td className="px-10 py-6">
                                                <span className="text-sm font-black text-slate-400 bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                                                    #{student.reg_no}
                                                </span>
                                            </td>
                                            <td className="px-10 py-6">
                                                <p className="text-xl font-black text-slate-800 group-hover:text-emerald-700 transition-colors tracking-tight">
                                                    {student.name}
                                                </p>
                                            </td>
                                            <td className="px-10 py-6">
                                                <p className="text-base font-bold text-slate-500 tracking-tight">{student.emial}</p>
                                            </td>
                                            <td className="px-10 py-6">
                                                <span className={`inline-flex items-center px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest border-2 ${student.course_id === 'N/A'
                                                        ? 'bg-gray-50 text-gray-400 border-gray-100'
                                                        : 'bg-emerald-50 text-emerald-700 border-emerald-100/50'
                                                    }`}>
                                                    {getCourseName(student.course_id)}
                                                </span>
                                            </td>
                                            <td className="px-10 py-6 text-right">
                                                <p className="text-base font-black text-slate-800 tracking-[0.05em]">
                                                    {student.mobile_no}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}

                                    {filteredStudents.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="px-10 py-32 text-center">
                                                <div className="flex flex-col items-center opacity-30 grayscale scale-125">
                                                    <svg className="w-20 h-20 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                                    <p className="text-2xl font-black uppercase tracking-[0.3em]">Directory Empty</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom Ticker */}
                    <div className="mt-14 flex justify-center items-center gap-12 opacity-30 grayscale pointer-events-none">
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">Student Lifecycle Management</p>
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">Encrypted Cloud Access</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllStudent