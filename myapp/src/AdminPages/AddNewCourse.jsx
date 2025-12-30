import React, { useEffect, useState } from "react";
import Dashboard from "../Component/Dashboard";
import AdminNavbar from './../Component/AdminNavbar';
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addCourse } from "../Services/adminServices"

function AddCourse() {
    const navigate = useNavigate()
    const [course, setCourse] = useState({
        course_name: "",
        description: "",
        fees: "",
        start_date: "",
        end_date: "",
        video_expire_days: ""
    });

    const insertCourse = async (e) => {
        e.preventDefault();
        if (!course.course_name || !course.fees || !course.start_date) {
            toast.warn("Please fill in the required fields");
            return;
        }

        const token = localStorage.getItem('token')
        const result = await addCourse(token, course.course_name, course.description, course.fees, course.start_date, course.end_date, course.video_expire_days)

        if (result.status === 'success') {
            toast.success('Course published successfully');
            navigate('/all-courses');
        } else {
            toast.error("Failed to initialize course record");
        }
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#f8fafc] font-sans overflow-hidden">
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT - Standard ml-72 for wide sidebar */}
            <div className="ml-72 flex-grow relative flex flex-col items-center justify-center px-8 py-4">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.2px, transparent 1.2px)`, backgroundSize: '40px 40px' }}></div>

                <div className="max-w-4xl w-full relative z-10 flex flex-col">

                    {/* Compact Header */}
                    <div className="mb-6 flex items-end justify-between px-2">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="h-[2px] w-6 bg-emerald-500 rounded-full"></span>
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Administrative Portal</p>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                                New <span className="text-slate-400 font-medium">Course</span>
                            </h2>
                        </div>
                    </div>

                    {/* Main Form Card - Optimized Height */}
                    <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-gray-100 p-8 lg:p-10">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">

                            {/* Course Name - Full Width */}
                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">Official Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. MERN Full Stack Development"
                                    onChange={(e) => setCourse({ ...course, course_name: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-bold text-slate-800 shadow-inner"
                                />
                            </div>

                            {/* Description - Full Width */}
                            <div className="md:col-span-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">Course Summary</label>
                                <input
                                    type="text"
                                    placeholder="Brief outline of course objectives..."
                                    onChange={(e) => setCourse({ ...course, description: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-medium text-slate-600 shadow-inner"
                                />
                            </div>

                            {/* Grid 1: Dates */}
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">Start Date</label>
                                <input
                                    type="date"
                                    onChange={(e) => setCourse({ ...course, start_date: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">End Date</label>
                                <input
                                    type="date"
                                    onChange={(e) => setCourse({ ...course, end_date: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                />
                            </div>

                            {/* Grid 2: Fees & Expiry */}
                            <div className="relative">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">Tuition Fee (₹)</label>
                                <div className="relative">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">₹</span>
                                    <input
                                        type="number"
                                        placeholder="Fees"
                                        onChange={(e) => setCourse({ ...course, fees: e.target.value })}
                                        className="w-full pl-10 pr-5 py-3.5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 ml-1">Video Access (Days)</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 180"
                                    onChange={(e) => setCourse({ ...course, video_expire_days: e.target.value })}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                />
                            </div>

                            {/* Submit Button - Large & Centered */}
                            <div className="md:col-span-2 pt-4">
                                <button
                                    onClick={insertCourse}
                                    className="w-full py-4 bg-slate-950 hover:bg-emerald-600 active:scale-[0.98] text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-4 group"
                                >
                                    Confirm & Publish
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="mt-6 flex justify-center items-center gap-10 opacity-20 grayscale pointer-events-none">
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">Real-time Database Sync</p>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em]">Encrypted Connection</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCourse;