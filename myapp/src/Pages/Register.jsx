import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { registerToCourse, getCourseInfo } from "../Services/studentServices";
import { toast } from "react-toastify";

export default function Register() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [course, setCourse] = useState([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [mobileNo, SetMobileNo] = useState('');

    useEffect(() => {
        getCourse();
    }, []);

    const getCourse = async () => {
        const result = await getCourseInfo(id);
        if (result.status === "success") {
            setCourse(result.data[0]);
        }
    };

    const register = async (e) => {
        e.preventDefault();
        if (name.trim() === '') {
            toast.warn('Name must be entered');
        } else if (email.trim() === '') {
            toast.warn('Email must be entered');
        } else if (mobileNo.trim() === '') {
            toast.warn('Mobile number must be entered');
        } else {
            const result = await registerToCourse(name, email, id, mobileNo);
            if (result.status === 'success') {
                toast.success('Register successful');
                navigate('/home');
            } else {
                toast.error('Already registered to this course');
            }
        }
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#f8fafc] px-4 overflow-hidden relative">

            {/* Subtle background texture for a premium feel */}
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px]"></div>

            <div className="w-full max-w-lg relative z-10">

                {/* Simplified Top Bar */}
                <div className="mb-5 px-1">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-400 hover:text-emerald-700 text-xs font-bold uppercase tracking-[0.15em] transition-all group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        Back to Courses
                    </button>
                </div>

                <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white overflow-hidden">

                    {/* Header: Recessed Information Panel */}
                    <div className="bg-slate-50/80 border-b border-gray-100 p-7">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-emerald-600">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <div>
                                    <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.25em] mb-1">Registration For</h2>
                                    <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                                        {course.course_name || "Loading..."}
                                    </h1>
                                </div>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Net Fee</p>
                                <p className="text-lg font-black text-slate-900">₹{course.fees}</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Area */}
                    <div className="p-10">
                        <form onSubmit={register} className="space-y-5">

                            <div className="grid grid-cols-1 gap-5">
                                {/* Input: Full Name */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Identity</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your legal name"
                                        onChange={e => setName(e.target.value)}
                                        className="w-full px-5 py-4 bg-slate-50/50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all text-sm font-semibold text-slate-800"
                                    />
                                </div>

                                {/* Input: Email */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Communication Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        onChange={e => setEmail(e.target.value)}
                                        className="w-full px-5 py-4 bg-slate-50/50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all text-sm font-semibold text-slate-800"
                                    />
                                </div>

                                {/* Input: Mobile */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Contact Number</label>
                                    <input
                                        type="text"
                                        placeholder="+91 00000 00000"
                                        onChange={e => SetMobileNo(e.target.value)}
                                        className="w-full px-5 py-4 bg-slate-50/50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all text-sm font-semibold text-slate-800"
                                    />
                                </div>
                            </div>

                            {/* Button Section */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-slate-950 hover:bg-emerald-700 active:scale-[0.98] text-white text-xs font-black py-5 rounded-2xl shadow-xl shadow-slate-200 transition-all duration-300 uppercase tracking-[0.3em] flex items-center justify-center gap-3"
                                >
                                    Confirm Enrollment
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </button>
                            </div>
                        </form>

                        {/* Professional Trust Badges */}
                        <div className="mt-8 flex items-center justify-center gap-6 opacity-30 grayscale pointer-events-none">
                            <span className="text-[10px] font-black uppercase tracking-tighter">Verified Portal</span>
                            <span className="text-[10px] font-black uppercase tracking-tighter">Secure SSL</span>
                            <span className="text-[10px] font-black uppercase tracking-tighter">Instant Access</span>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    Official Student Enrollment Dashboard
                </p>
            </div>
        </div>
    );
}