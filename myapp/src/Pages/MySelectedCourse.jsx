<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { useParams } from 'react-router'
import { getCourseWithVideos } from '../Services/studentServices'

function MySelectedCourse() {

    const { id } = useParams()
    const [course, setCourse] = useState([])
    const [courseInfo, setCourseInfo] = useState([])

    useEffect(() => {
        console.log('My Selected Course component loaded')
        loadMyCourse()
    }, [])

    const loadMyCourse = async () => {
        const token = localStorage.getItem('token')

        const result = await getCourseWithVideos(id, token)
        console.log(result)
        if (result.status === 'success') {
            setCourse(result.data)
            setCourseInfo(result.data[0])
        }
    }

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
                                {courseInfo.course_name}
                            </div>

                            {/* Course Dates */}
                            <div className="px-5 py-3 border-b text-sm text-gray-700">
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Start:</span>
                                    {new Date(courseInfo.start_date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}

                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">End:</span>
                                    {new Date(courseInfo.end_date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}

                                </p>
                            </div>

                            {/* Videos */}
                            <div className="px-5 py-5">
                                <h4 className="font-semibold mb-4 text-gray-800 text-lg">
                                    Lecture Videos
                                </h4>

                                <div className="border rounded-lg divide-y">
                                    {course.map((video) => (
                                        <div key={video.video_id} className="px-4 py-3">
                                            <a
                                                href={video.youtube_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-emerald-600 font-semibold hover:underline"
                                            >
                                                {video.title}
                                            </a>

                                            <p className="text-xs text-gray-500 mt-1">
                                                Added:{" "}
                                                {new Date(video.added_at).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
=======
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
>>>>>>> 38d318c874a98170abbf268cc59eed508e2ab987
}

export default MySelectedCourse