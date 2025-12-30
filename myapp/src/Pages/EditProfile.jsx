import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router'
import { getProfile, updateProfile } from '../Services/studentServices'
import { toast } from 'react-toastify'

export default function EditProfile() {
    const navigate = useNavigate()
    const [info, setInfo] = useState({ emial: "", profile_pic: "" });
    const [name, setName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [password, setPassword] = useState('')
    const [con_password, setCon_Password] = useState('')

    useEffect(() => {
        loadInfo()
    }, [])

    const loadInfo = async () => {
        const token = localStorage.getItem('token')
        const result = await getProfile(token)
        if (result.status == 'success') {
            setInfo(result.data[0])
            // Initialize fields with current data
            setName(result.data[0].name)
            setMobileNo(result.data[0].mobile_no)
        }
    }

    const updateDetails = async (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            toast.warn('Name must be entered');
        } else if (password.trim() === '') {
            toast.warn('Password must be entered');
        } else if (con_password.trim() === '') {
            toast.warn('Confirm Password must be entered');
        } else if (mobileNo.trim() === '') {
            toast.warn('Mobile number must be entered');
        } else if (password.trim() !== con_password.trim()) {
            toast.warn('Passwords do not match');
        } else {
            const token = localStorage.getItem('token')
            const result = await updateProfile(token, name, mobileNo, password);
            if (result.status === 'success') {
                toast.success('Update successful');
                navigate('/profile');
            } else {
                toast.error('Update failed');
            }
        }
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#f8fafc] overflow-hidden font-sans">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-6 relative">
                {/* Background Sophistication */}
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`, backgroundSize: '35px 35px' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-5xl w-full relative z-10">

                    {/* Header Navigation */}
                    <div className="mb-6 flex items-center justify-between px-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-slate-400 hover:text-emerald-700 font-bold text-sm uppercase tracking-widest transition-all group"
                        >
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                            Discard Changes
                        </button>
                    </div>

                    {/* Edit Card */}
                    <div className="bg-white rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col md:grid md:grid-cols-12 min-h-[550px]">

                        {/* LEFT SIDEBAR: Photo & Identity */}
                        <div className="md:col-span-4 bg-gradient-to-br from-emerald-600 to-teal-700 p-10 flex flex-col items-center justify-center text-center relative">
                            <div className="relative group cursor-pointer">
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-110 group-hover:bg-white/40 transition-all"></div>
                                <img
                                    src={info.profile_pic}
                                    alt="Profile"
                                    className="relative w-40 h-40 rounded-full object-cover border-8 border-white/20 shadow-2xl z-10"
                                />
                                <div className="absolute bottom-2 right-2 z-20 bg-white p-2 rounded-full shadow-lg text-emerald-600">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                                </div>
                            </div>
                            <div className="mt-8 text-white">
                                <h3 className="text-2xl font-black tracking-tight mb-1">{name || "Student"}</h3>
                                <p className="text-xs font-bold text-emerald-100 uppercase tracking-[0.3em] opacity-70">Personalize Account</p>
                            </div>
                        </div>

                        {/* RIGHT CONTENT: Dynamic Form */}
                        <div className="md:col-span-8 p-10 lg:p-14 flex flex-col justify-center bg-white">
                            <div className="mb-10">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Edit Account Details</h2>
                                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Secure Profile Management</p>
                            </div>

                            <form onSubmit={updateDetails} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Email (Read-Only Styled) */}
                                    <div className="md:col-span-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block ml-1">Verified Email Address</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                            </div>
                                            <input
                                                type="email"
                                                value={info.emial}
                                                disabled
                                                className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 font-bold text-lg cursor-not-allowed italic"
                                            />
                                        </div>
                                    </div>

                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Legal Full Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter full name"
                                            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-bold text-slate-800"
                                        />
                                    </div>

                                    {/* Mobile Input */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Contact Number</label>
                                        <input
                                            type="text"
                                            value={mobileNo}
                                            onChange={(e) => setMobileNo(e.target.value)}
                                            placeholder="+91 00000 00000"
                                            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-bold text-slate-800"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">New Password</label>
                                        <input
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-bold text-slate-800"
                                        />
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Confirm New Password</label>
                                        <input
                                            type="password"
                                            onChange={(e) => setCon_Password(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all text-lg font-bold text-slate-800"
                                        />
                                    </div>
                                </div>

                                {/* Save Button */}
                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-12 py-5 bg-slate-950 hover:bg-emerald-600 active:scale-[0.98] text-white font-black rounded-[1.5rem] transition-all duration-300 shadow-2xl shadow-slate-200 hover:shadow-emerald-200 uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-4 group/btn"
                                    >
                                        Update Credentials
                                        <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}