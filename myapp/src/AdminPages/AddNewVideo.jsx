import React, { useState, useEffect } from "react";
import AdminNavbar from "../Component/AdminNavbar";
import Dashboard from "../Component/Dashboard";
import { getAllCourses, addVideo } from "../Services/adminServices";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AddVideo() {
  const navigate = useNavigate();

  const [video, setVideo] = useState({
    title: "",
    description: "",
    youtube_url: ""
  });

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const token = localStorage.getItem("token");
    const result = await getAllCourses(token);

    if (result.status === "success") {
      setCourses(result.data);
    }
  };

  const insertVideo = async (e) => {
    e.preventDefault();

    if (!selectedCourse || !video.title || !video.youtube_url) {
      toast.warn("Please complete all mandatory fields");
      return;
    }

    const token = localStorage.getItem('token');
    const result = await addVideo(token, Number(selectedCourse), video.title, video.youtube_url, video.description);

    if (result.status === 'success') {
      toast.success('Video content published');
      navigate('/all-videos');
    } else {
      toast.error("Failed to sync video record");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#f8fafc] font-sans overflow-hidden">
      <AdminNavbar />
      <Dashboard />

      {/* MAIN CONTENT - ml-72 alignment for Premium Sidebar */}
      <div className="ml-72 flex-grow relative flex flex-col items-center justify-center px-10 py-6">

        {/* Background Sophistication */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.2px, transparent 1.2px)`, backgroundSize: '40px 40px' }}></div>

        <div className="max-w-4xl w-full relative z-10">

          <div className="mb-8 px-2 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[3px] w-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
                <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.4em]">Content Hub</p>
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
                Upload <span className="text-slate-400 font-medium">Lecture</span>
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100 p-10 lg:p-12 relative overflow-hidden">
            <form className="space-y-8">

              {/* --- PREMIUM MATCHING SELECT DROPDOWN --- */}
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Assign to Course Catalog</label>

                <div className="flex items-center gap-6 bg-emerald-50/60 backdrop-blur-sm p-4 rounded-[2rem] border border-emerald-100 transition-all hover:border-emerald-300 group shadow-inner">
                  {/* Themed Icon Hub */}
                  <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-100 group-hover:scale-105 transition-transform">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <div className="flex-grow relative">
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full bg-transparent text-lg font-black text-slate-800 outline-none cursor-pointer appearance-none pr-10"
                    >
                      <option value="">-- Select Target Program --</option>
                      {courses.map(course => (
                        <option key={course.Course_id} value={course.Course_id}>
                          {course.course_name}
                        </option>
                      ))}
                    </select>
                    {/* Custom SVG Arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & URL Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Video Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Node.js Middleware"
                    onChange={(e) => setVideo({ ...video, title: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-bold text-slate-800 shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">YouTube Source URL</label>
                  <input
                    type="text"
                    placeholder="https://youtube.com/..."
                    onChange={(e) => setVideo({ ...video, youtube_url: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-bold text-slate-800 shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Notes / Description</label>
                <textarea
                  rows="2"
                  placeholder="Key objectives..."
                  onChange={(e) => setVideo({ ...video, description: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-medium text-slate-600 resize-none shadow-inner"
                />
              </div>

              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Stream Infrastructure Ready</span>
                </div>

                <button
                  onClick={insertVideo}
                  className="px-16 py-5 bg-slate-950 hover:bg-emerald-600 active:scale-[0.98] text-white font-black text-xs uppercase tracking-[0.3em] rounded-[1.5rem] transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-4 group"
                >
                  Publish Asset
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;