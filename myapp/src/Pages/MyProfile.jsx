import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { getProfile } from '../Services/studentServices'
import { useNavigate } from 'react-router'

function MyProfile() {
    const navigate = useNavigate()
    const [info, setInfo] = useState([])

    useEffect(() => {
        loadInfo()
    }, [])

    const loadInfo = async () => {
        const token = localStorage.getItem('token')
        const result = await getProfile(token)
        if (result.status == 'success') {
            setInfo(result.data[0])
        }
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#f8fafc] overflow-hidden font-sans">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-6 relative">
                {/* Greenery Background Accents */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`, backgroundSize: '35px 35px' }}></div>

                <div className="max-w-5xl w-full relative z-10">

                    {/* Back Navigation - Large & Clear */}
                    <div className="flex justify-between items-center mb-6 px-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-3 text-slate-500 hover:text-emerald-700 font-bold text-sm uppercase tracking-widest transition-all group"
                        >
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                            Back to Portal
                        </button>
                        <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">Active Status</span>
                        </div>
                    </div>

                    {/* Profile Card - Enhanced Design */}
                    <div className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]">

                        {/* LEFT: Branding Sidebar (Rich Greenery) */}
                        <div className="md:w-5/12 bg-gradient-to-br from-emerald-600 to-teal-700 p-12 flex flex-col items-center justify-center text-center text-white relative">
                            {/* Decorative Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.328 0h3.299zM5.373 0L4.544.828 5.959 2.243 8.672 0H5.373zM60 54.627l-.828.83-1.415-1.415L57.757 51.328V54.627H60zM0 5.373l.828-.829 1.415 1.415L2.243 8.672H0V5.373z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>

                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-110"></div>
                                <img
                                    src={info.profile_pic}
                                    alt="Profile"
                                    className="relative w-48 h-48 rounded-full object-cover border-8 border-white/20 shadow-2xl z-10"
                                />
                            </div>
                            <h2 className="text-4xl font-black tracking-tight mb-2 drop-shadow-sm">
                                {info.name}
                            </h2>
                            <div className="px-5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.3em]">
                                Verified Student
                            </div>
                        </div>

                        {/* RIGHT: Details Section (Large Text) */}
                        <div className="md:w-7/12 p-12 lg:p-16 flex flex-col justify-center bg-white">
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-[0.2em] mb-10 border-b border-gray-50 pb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                                Identity Profile
                            </h3>

                            <div className="space-y-10">
                                {/* Email Field - Enlarged */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white shadow-sm">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                                        <p className="text-2xl font-bold text-slate-900 tracking-tight">{info.emial}</p>
                                    </div>
                                </div>

                                {/* Mobile Field - Enlarged */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white shadow-sm">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Contact Number</p>
                                        <p className="text-2xl font-bold text-slate-900 tracking-tight">{info.mobile_no}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action - High Contrast Button */}
                            <div className="mt-12">
                                <button
                                    onClick={() => { navigate('/edit-profile') }}
                                    className="w-full md:w-auto px-12 py-5 bg-slate-950 hover:bg-emerald-600 active:scale-[0.98] text-white font-black rounded-[1.5rem] transition-all duration-300 shadow-2xl shadow-slate-200 uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4"
                                >
                                    Update Profile Details
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default MyProfile