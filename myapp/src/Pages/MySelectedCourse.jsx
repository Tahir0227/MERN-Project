import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate, useParams } from 'react-router'
import { getCourseWithVideos } from '../Services/studentServices'

function MySelectedCourse() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [course, setCourse] = useState([])
    const [courseInfo, setCourseInfo] = useState({})

    useEffect(() => {
        loadMyCourse()
    }, [])

    const loadMyCourse = async () => {
        const token = localStorage.getItem('token')
        const result = await getCourseWithVideos(id, token)
        if (result.status === 'success') {
            setCourse(result.data)
            setCourseInfo(result.data[0] || {})
        }
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#f8fafc] overflow-hidden">
            <Navbar />
            <div className="flex-grow flex flex-col items-center px-6 relative overflow-hidden pt-6">
                <div className="max-w-5xl w-full relative z-10 flex flex-col h-full">

                    <div className="flex justify-between items-center mb-6 px-2">
                        <button onClick={() => navigate('/my-course')} className="flex items-center gap-3 text-slate-400 hover:text-emerald-700 font-bold text-sm uppercase tracking-[0.2em] transition-all group">
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                            Back to Dashboard
                        </button>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-sm border-t-[10px] border-emerald-500 p-10 mb-8">
                        <div className="flex items-center gap-8">
                            <div className="h-20 w-20 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-4xl">🎓</div>
                            <div>
                                <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">{courseInfo.course_name}</h1>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enrollment: <span className="text-slate-900">#REG-{id}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow flex flex-col overflow-hidden mb-6">
                        <h4 className="text-base font-black text-slate-900 uppercase tracking-[0.25em] mb-6 px-4">Learning Path</h4>
                        <div className="flex-grow overflow-y-auto pr-3 space-y-4 custom-scrollbar pb-10">
                            {course.map((video, index) => (
                                <div key={video.video_id} onClick={() => navigate(`/my-course/videos/${video.video_id}`)} className="group bg-white rounded-3xl p-6 flex items-center justify-between border border-transparent hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                                    <div className="flex items-center gap-8">
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all font-black text-lg">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h5 className="text-xl font-black text-slate-800 group-hover:text-emerald-700 transition-colors">{video.title}</h5>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-all">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-5 bg-white border-t border-slate-100 px-12 flex justify-between items-center text-[11px] font-black text-slate-300 uppercase tracking-[0.5em]">
                Digital Educational Ecosystem
                <span className="text-slate-900 opacity-30">Secure Portal</span>
            </footer>
        </div>
    )
}
export default MySelectedCourse