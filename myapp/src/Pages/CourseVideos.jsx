import { useNavigate, useParams } from 'react-router'
import Navbar from '../Component/Navbar'
import { useState, useEffect } from 'react'
import { getVideo } from '../Services/studentServices'

function CourseVideos() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [video, setVideo] = useState(null) // Changed to null for better loading check

    useEffect(() => {
        loadVideo()
    }, [id]) // Reload if ID changes

    const loadVideo = async () => {
        const token = localStorage.getItem('token')
        const result = await getVideo(id, token)
        if (result.status === "success") {
            setVideo(result.data[0])
        }
    }

    const getEmbedUrl = (url) => {
        if (!url) return ""
        let videoId = ""
        if (url.includes("watch?v=")) videoId = url.split("watch?v=")[1].split("&")[0]
        else if (url.includes("youtu.be/")) videoId = url.split("youtu.be/")[1].split("?")[0]
        else if (url.includes("/shorts/")) videoId = url.split("/shorts/")[1].split("?")[0]
        return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1` : ""
    }

    // FIX: Explicit navigation back to the specific course info page
    const handleBack = () => {
        if (video && video.Course_id) {
            navigate(`/my-course-info/${video.Course_id}`, { replace: true });
        } else {
            navigate('/my-course', { replace: true });
        }
    }

    return (
        <div className="h-screen w-full flex flex-col bg-[#fcfcfd] font-sans overflow-hidden">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center px-6 relative pb-12">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}></div>
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-50/40 to-transparent -z-10 pointer-events-none"></div>

                <div className="max-w-6xl w-full relative z-10 flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 px-2">
                        <div className="flex-1">
                            <button
                                onClick={handleBack}
                                className="mb-4 flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-[11px] uppercase tracking-[0.4em] transition-all group"
                            >
                                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                                Return to Curriculum
                            </button>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="h-1 w-6 bg-emerald-500 rounded-full"></span>
                                <p className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.5em]">Now Streaming</p>
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">
                                {video ? video.title : "Loading..."}<span className="text-emerald-500">.</span>
                            </h1>
                        </div>
                        <div className="hidden md:flex flex-col items-end">
                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Course Program</p>
                            <p className="text-sm font-black text-slate-900 tracking-tight bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                                {video ? video.course_name : "---"}
                            </p>
                        </div>
                    </div>

                    <div className="relative group w-full">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-slate-200/10 to-blue-500/10 rounded-[2.5rem] blur-3xl opacity-40"></div>
                        <div className="relative bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10 aspect-video w-full z-10">
                            {video && (
                                <iframe
                                    className="w-full h-full"
                                    src={getEmbedUrl(video.youtube_url)}
                                    title="Lecture Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default CourseVideos