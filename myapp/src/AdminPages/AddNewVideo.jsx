import React, { useState } from "react";

function AddVideo() {
  const [form, setForm] = useState({
    course: "",
    title: "",
    url: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-4"
    >
      <div className="w-full max-w-2xl">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Top Accent */}
          <div className="h-2 bg-emerald-400"></div>

          <div className="p-8">

            {/* Header (FIXED TITLE) */}
            <h2 className="text-2xl font-extrabold text-gray-800">
              Add New Video
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Add learning content for enrolled students
            </p>

            <form className="space-y-5">

              {/* Course Dropdown */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Course Name
                </label>
                <select
                  name="course"
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                >
                  <option value="">Select course</option>
                  <option>MERN Full Stack</option>
                  <option>Java Programming</option>
                </select>
                <p className="text-xs text-gray-400 mt-1">
                  Choose which course this video belongs to
                </p>
              </div>

              {/* Video Title */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Video Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Ex: MERN Authentication Part-1"
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              {/* YouTube URL */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  YouTube Link
                </label>
                <input
                  type="text"
                  name="url"
                  onChange={handleChange}
                  placeholder="Paste full YouTube video URL"
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Video Notes / Description
                </label>
                <textarea
                  rows="3"
                  name="description"
                  onChange={handleChange}
                  placeholder="Explain what students will learn in this video"
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
                ></textarea>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600
                  text-white py-3 rounded-xl font-bold
                  hover:scale-[1.02] transition shadow-lg"
                >-
                  Add Video
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
