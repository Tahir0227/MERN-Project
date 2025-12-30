import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate, useParams } from 'react-router'
import { getCourseInfo } from '../Services/studentServices'

function Courseinfo() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [course, setCourse] = useState({})

    useEffect(() => {
        getCourse()
    }, [])

    const getCourse = async () => {
        const result = await getCourseInfo(id)
        if (result.status === "success") {
            setCourse(result.data[0])
        }
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#fcfcfd] overflow-hidden">
            <Navbar />

            <div className="flex-grow flex items-center justify-center px-6 relative">
                {/* Background Sophistication */}
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}></div>
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[120px]"></div>

                <div className="max-w-5xl w-full relative z-10">
                    {/* Back Navigation */}
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-[11px] uppercase tracking-[0.3em] transition-all group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                        Back to Courses
                    </button>

                    <div className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                        <div className="flex flex-col md:flex-row">

                            {/* LEFT: Logo Branding - Larger Focus */}
                            <div className="md:w-5/12 bg-slate-50/50 p-12 flex flex-col items-center justify-center border-r border-gray-100/80">
                                <div className="w-full aspect-square max-w-[260px] bg-white rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center justify-center p-10 mb-8 relative">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                                        alt="Course Logo"
                                        className="w-full h-full object-contain relative z-10"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-2">Institutional Program</p>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Serial Code: #INST-{id}</p>
                                </div>
                            </div>

                            {/* RIGHT: Main Information */}
                            <div className="md:w-7/12 p-12 lg:p-16 flex flex-col justify-center">
                                <div className="mb-10">
                                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
                                        {course.course_name}
                                    </h1>
                                    <p className="text-base lg:text-lg leading-relaxed text-slate-500 font-medium">
                                        {course.description || "Master the core concepts of industrial development with our expert-led curriculum. This course provides comprehensive training designed for professional growth and immediate industry impact."}
                                    </p>
                                </div>

                                {/* Large Info Cards - Replacing the Stats Bar */}
                                <div className="grid grid-cols-2 gap-6 mb-12">
                                    <div className="bg-slate-50/80 rounded-3xl p-6 border border-gray-100 group hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-emerald-600 mb-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        </div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Commences On</p>
                                        <p className="text-lg font-black text-slate-900">
                                            {new Date(course.start_date).toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' })}
                                        </p>
                                    </div>

                                    <div className="bg-slate-50/80 rounded-3xl p-6 border border-gray-100 group hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-emerald-600 mb-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Tuition Fee</p>
                                        <p className="text-lg font-black text-slate-900 tracking-tight">₹{course.fees}</p>
                                    </div>
                                </div>

                                {/* Primary Action Button - Bigger and bolder */}
                                <div className="mt-auto">
                                    <button
                                        onClick={() => navigate(`/registerCourse/${course.Course_id}`)}
                                        className="w-full bg-slate-950 hover:bg-emerald-700 active:scale-[0.98] text-white font-black py-5 rounded-[1.5rem] transition-all duration-300 shadow-2xl shadow-slate-200 flex items-center justify-center gap-4 group/btn"
                                    >
                                        <span className="text-xs uppercase tracking-[0.4em]">Initialize Enrollment</span>
                                        <svg className="w-6 h-6 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center items-center gap-12 opacity-40 grayscale pointer-events-none">
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">Industry Verified</p>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">Secured Enrollment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courseinfo