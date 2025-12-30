import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router'
import { getMyCourses } from '../Services/studentServices'

function MyCourses() {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadCourses()
    }, [])

    const loadCourses = async () => {
        const token = localStorage.getItem('token')
        const result = await getMyCourses(token)
        if (result.status === 'success') {
            setCourses(result.data)
        }
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#fcfcfd] overflow-hidden">
            <Navbar />
            <main className="flex-grow py-8 px-6 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}></div>

                <div className="max-w-7xl w-full relative z-10">
                    <div className="flex justify-between items-end mb-10 px-2">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="h-[2px] w-4 bg-emerald-500"></span>
                                <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em]">Learning Management</p>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                                My Active <span className="text-slate-400 font-medium">Courses</span>
                            </h2>
                        </div>
                        <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Enrollments</span>
                            <span className="text-xl font-black text-slate-900">{courses.length} Courses</span>
                        </div>
                    </div>

                    {courses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map(course => (
                                <div key={course.Course_id} className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-[0_30px_60px_rgba(16,185,129,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col">
                                    <div className="p-8 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-emerald-50 transition-colors">
                                                📚
                                            </div>
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase rounded-lg border border-emerald-100">Ongoing</span>
                                        </div>

                                        <h3 className="text-2xl font-black text-slate-900 leading-tight mb-8 group-hover:text-emerald-600 transition-colors">
                                            {course.course_name}
                                        </h3>

                                        <button
                                            className="w-full bg-slate-950 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg"
                                            onClick={() => navigate(`/my-course-info/${course.Course_id}`)}
                                        >
                                            <span className="text-xs uppercase tracking-widest">Enter Classroom</span>
                                            <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-20 bg-white rounded-[3rem] border-dashed border-2 border-slate-100">
                            <p className="text-slate-400 font-bold uppercase tracking-widest">No Courses Found</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
export default MyCourses