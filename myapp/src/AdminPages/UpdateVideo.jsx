import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Dashboard from "../Component/Dashboard";
import AdminNavbar from "../Component/AdminNavbar";
import { useNavigate, useParams } from "react-router";
import { getVideoInfo, getAllCourses, updateVideoById } from "../Services/adminServices";

function EditVideo() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [video, setVideo] = useState({
    title: "",
    description: "",
    youtube_url: ""
  });

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    loadVideo();
    loadCourses();
  }, []);

  const loadVideo = async () => {
    const token = localStorage.getItem("token");
    const result = await getVideoInfo(token, id);

    if (result.status === "success") {
      const videoData = result.data[0];
      setVideo({
        title: videoData.title,
        description: videoData.description,
        youtube_url: videoData.youtube_url
      });
      setSelectedCourse(videoData.course_id);
    }
  };

  const loadCourses = async () => {
    const token = localStorage.getItem("token");
    const result = await getAllCourses(token);
    if (result.status === "success") {
      setCourses(result.data);
    }
  };

  const videoUpdated = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const result = await updateVideoById(
      token,
      id,
      Number(selectedCourse),
      video.title,
      video.description,
      video.youtube_url
    );

    if (result.status === "success") {
      toast.success("video updated!");
      navigate(-1);
    } else {
      toast.error("System Error: Update failed");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-[#f8fafc] font-sans overflow-hidden">
      <AdminNavbar />
      <Dashboard />

      {/* MAIN CONTENT - Standard ml-72 for side dashboard alignment */}
      <div className="ml-72 flex-grow relative flex flex-col items-center justify-center px-10 py-6">

        {/* Background "Greeny" Sophistication */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `radial-gradient(#10b981 1.2px, transparent 1.2px)`, backgroundSize: '40px 40px' }}></div>

        <div className="max-w-4xl w-full relative z-10">

          {/* Section Header */}
          <div className="mb-8 px-2 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[3px] w-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"></span>
                <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.4em]">Resource Modification</p>
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
                Update <span className="text-slate-400 font-medium">Lecture</span>
              </h2>
            </div>
          </div>

          {/* Form Card - Height Optimized for No-Scroll */}
          <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100 p-10 lg:p-12 relative overflow-hidden">
            {/* Soft decorative emerald corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/40 rounded-bl-[100%]"></div>

            <form onSubmit={videoUpdated} className="space-y-6">

              {/* Course Selector */}
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Reassign Parent Course</label>
                <div className="relative">
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-6 py-4.5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-bold text-slate-800 appearance-none cursor-pointer shadow-inner"
                  >
                    {courses.map(course => (
                      <option key={course.Course_id} value={course.Course_id}>
                        {course.course_name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
              </div>

              {/* Title & URL Stacked Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Asset Headline</label>
                  <input
                    type="text"
                    value={video.title}
                    placeholder="Enter video title"
                    onChange={(e) => setVideo({ ...video, title: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-bold text-slate-800 shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">YouTube Content URL</label>
                  <input
                    type="text"
                    value={video.youtube_url}
                    placeholder="Link source"
                    onChange={(e) => setVideo({ ...video, youtube_url: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-bold text-slate-800 shadow-inner"
                  />
                </div>
              </div>

              {/* Description - Compact to prevent scroll */}
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] ml-1">Content Summary</label>
                <textarea
                  rows="2"
                  value={video.description}
                  placeholder="Detailed lecture notes..."
                  onChange={(e) => setVideo({ ...video, description: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-emerald-500 transition-all outline-none text-lg font-medium text-slate-600 resize-none shadow-inner"
                />
              </div>

              {/* Action Group */}
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Database Entry Verified</span>
                </div>

                <button
                  onClick={videoUpdated}
                  type="submit"
                  className="px-16 py-5 bg-slate-950 hover:bg-emerald-600 active:scale-[0.98] text-white font-black text-xs uppercase tracking-[0.3em] rounded-[1.5rem] transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-4 group"
                >
                  Commit Update
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </button>
              </div>
            </form>
          </div>

          {/* Minimal Branding Watermark */}
          <div className="mt-8 flex justify-center items-center gap-12 opacity-30 grayscale pointer-events-none">
            <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">System Audit v1.42</p>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
            <p className="text-[11px] font-black text-slate-900 uppercase tracking-[0.6em]">Encrypted Data Sync</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVideo;