import React, { useEffect, useState } from "react";
import Dashboard from "../Component/Dashboard";
import AdminNavbar from "../Component/AdminNavbar";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { getCourseInfo2, UpdateCourseById } from "../Services/adminServices";

function UpdateCourse() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [course, setCourse] = useState({
        course_name: "",
        description: "",
        start_date: "",
        end_date: "",
        fees: "",
        video_expire_days: ""
    });

    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        const result = await getCourseInfo2(id);
        if (result.status === "success") {
            setCourse(result.data[0]);
        }
    };

    const courseUpdated = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        // Maintaining your specific slice logic for backend compatibility
        const result = await UpdateCourseById(
            token,
            id,
            course.course_name,
            course.description,
            course.start_date?.slice(0, 10),
            course.end_date?.slice(0, 10),
            course.fees,
            course.video_expire_days
        );

        if (result.status === "success") {
            toast.success("Course credentials updated successfully!");
            navigate('/all-courses');
        } else {
            toast.error("Update failed: System error");
        }
    };

    return (
        <div className="h-screen w-full flex flex-col bg-[#f8fafc] font-sans overflow-hidden">
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT - Optimized for ml-72 and No-Scroll */}
            <div className="ml-72 flex-grow relative flex flex-col items-center justify-center px-10 py-6">

                {/* Background "Greeny" Sophistication */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.2px, transparent 1.2px)`, backgroundSize: '40px 40px' }}></div>

                <div className="max-w-4xl w-full relative z-10">

                    {/* Executive Header */}
                    <div className="mb-6 px-2 flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="h-[3px] w-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Administrative Overlay</p>
                            </div>
                            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
                                Update <span className="text-slate-400 font-medium">Course</span>
                            </h2>
                        </div>
                    </div>

                    {/* Main Form Card - No Scroll Height Optimization */}
                    <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100 p-10 lg:p-12 relative">
                        <form onSubmit={courseUpdated} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

                            {/* Course Name - Prominent */}
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Title Specification</label>
                                <input
                                    type="text"
                                    value={course.course_name}
                                    placeholder="Course name"
                                    onChange={(e) => setCourse({ ...course, course_name: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-bold text-slate-800 shadow-inner"
                                />
                            </div>

                            {/* Description - Compact */}
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Summary Update</label>
                                <input
                                    type="text"
                                    value={course.description}
                                    placeholder="Brief summary..."
                                    onChange={(e) => setCourse({ ...course, description: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-medium text-slate-600 shadow-inner"
                                />
                            </div>

                            {/* Timeline Row */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Start Date</label>
                                <input
                                    type="date"
                                    value={course.start_date ? new Date(course.start_date).toISOString().slice(0, 10) : ""}
                                    onChange={(e) => setCourse({ ...course, start_date: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">End Date</label>
                                <input
                                    type="date"
                                    value={course.end_date ? new Date(course.end_date).toISOString().slice(0, 10) : ""}
                                    onChange={(e) => setCourse({ ...course, end_date: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                />
                            </div>

                            {/* Financials & Access Row */}
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Revised Fees (₹)</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-600 font-bold text-lg">₹</span>
                                    <input
                                        type="number"
                                        value={course.fees}
                                        placeholder="0.00"
                                        onChange={(e) => setCourse({ ...course, fees: e.target.value })}
                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Video Lifetime (Days)</label>
                                <input
                                    type="number"
                                    value={course.video_expire_days}
                                    placeholder="e.g. 180"
                                    onChange={(e) => setCourse({ ...course, video_expire_days: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-black text-slate-800"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2 pt-6">
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-slate-950 hover:bg-emerald-600 active:scale-[0.98] text-white font-black text-xs uppercase tracking-[0.3em] rounded-[1.5rem] transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-4 group"
                                >
                                    Push Changes to System
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="mt-8 flex justify-center items-center gap-12 opacity-30 grayscale pointer-events-none">
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">System Audit v2.01</p>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                        <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">Modification Log Active</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateCourse;