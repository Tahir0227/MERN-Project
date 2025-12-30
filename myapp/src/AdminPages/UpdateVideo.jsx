import React, { useState } from "react";

function EditVideo() {
  const [form, setForm] = useState({
    course: "IIT-MERN-2025",
    title: "MERN video 1",
    url: "some-url",
    description: "some-description"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated video:", form);
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

            {/* Header */}
            <h2 className="text-2xl font-extrabold text-gray-800">
              Edit Video
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Update video details for this course
            </p>

            <form onSubmit={handleUpdate} className="space-y-5">

              {/* Course */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Course
                </label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                >
                  <option>IIT-MERN-2025</option>
                  <option>Java Programming</option>
                </select>
              </div>

              {/* Video Title */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Video Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              {/* YouTube URL */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  YouTube URL
                </label>
                <input
                  type="text"
                  name="url"
                  value={form.url}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  rows="3"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border px-4 py-2.5
                  focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
                ></textarea>
              </div>

              {/* Update Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600
                  text-white py-3 rounded-xl font-bold
                  hover:scale-[1.02] transition shadow-lg"
                >
                  Update Video
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVideo;
