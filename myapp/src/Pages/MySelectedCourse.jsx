import React from 'react'
import Navbar from '../Component/Navbar'

function MySelectedCourse() {
  return (
    <>
    <Navbar />

    <div className="min-h-screen w-full 
    bg-gradient-to-br from-emerald-100 via-white to-blue-100
    flex justify-center py-10">

      {/* Main Container */}
      <div className="w-full max-w-6xl px-6">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          {/* Title */}
          <h3 className="text-3xl font-extrabold text-gray-800 mb-1">
            My Registered Course
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Access your enrolled course details
          </p>

          {/* Course Box */}
          <div className="border border-emerald-300 rounded-xl overflow-hidden">

            {/* Course Header */}
            <div className="bg-emerald-100 px-5 py-4 font-semibold text-emerald-800 text-lg">
              IIT-MERN-2025 — MERN
            </div>

            {/* Course Dates */}
            <div className="px-5 py-3 border-b text-sm text-gray-700">
              <span className="font-semibold">Start:</span> 10 Dec 2025
              <span className="mx-3">|</span>
              <span className="font-semibold">End:</span> 5 Jan 2026
            </div>

            {/* Videos */}
            <div className="px-5 py-5">
              <h4 className="font-semibold mb-4 text-gray-800 text-lg">
                Videos
              </h4>

              <div className="border rounded-lg divide-y">

                <div className="px-4 py-3">
                  <button className="text-emerald-600 font-semibold hover:underline">
                    MERN video 6
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    Added: 26 Nov 2025
                  </p>
                </div>

                <div className="px-4 py-3">
                  <button className="text-emerald-600 font-semibold hover:underline">
                    MERN 10
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    Added: 26 Nov 2025
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </>
  )
}

export default MySelectedCourse