import { useNavigate, useParams } from 'react-router'
import Navbar from '../Component/Navbar'
import { useState, useEffect } from 'react'
import { getVideo } from '../Services/studentServices'

function CourseVideos() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [video, setVideo] = useState([])

    useEffect(() => {
        console.log("video component loaded")
        loadVideo()
    }, [])

    const loadVideo = async () => {
        console.log(id)
        const token = localStorage.getItem('token')
        const result = await getVideo(id, token)
        console.log(result)
        if (result.status == "success") {
            setVideo(result.data[0])
        }
    }


    const getEmbedUrl = (url) => {
        if (!url) return ""

        let videoId = ""

        // youtube.com/watch?v=VIDEO_ID
        if (url.includes("watch?v=")) {
            videoId = url.split("watch?v=")[1].split("&")[0]
        }
        // youtu.be/VIDEO_ID
        else if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1].split("?")[0]
        }
        // youtube shorts
        else if (url.includes("/shorts/")) {
            videoId = url.split("/shorts/")[1].split("?")[0]
        }

        return videoId
            ? `https://www.youtube-nocookie.com/embed/${videoId}`
            : ""
    }


    return (

        <>
            <Navbar />

            <div
                className="min-h-screen w-full
      bg-gradient-to-br from-emerald-100 via-white to-blue-100
      py-10 px-6"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Back Button */}
                    <button
                        className="mb-6 inline-flex items-center gap-2
          bg-emerald-600 text-white px-4 py-2 rounded-lg
          hover:bg-emerald-700 transition shadow"
                        onClick={() =>
                            navigate(`/my-course-info/${video.Course_id}`)
                        }
                    >
                        ← Back to Course
                    </button>

                    {/* Title Card */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {video.course_name}
                        </h2>
                        <p className="text-gray-600 mt-2">
                            {video.description}
                        </p>
                    </div>

                    {/* Video Player Card */}
                    <div className="flex justify-center">
                        <div
                            className="bg-black rounded-xl overflow-hidden shadow-2xl
            aspect-video w-full max-w-4xl"
                        >
                            <iframe
                                className="w-full h-full"
                                src={getEmbedUrl(video.youtube_url)}
                                title="Course Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Video Meta Info */}
                    <div className="max-w-4xl mx-auto mt-4
                        bg-white rounded-lg shadow-sm px-4 py-3
                        flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                            📅 Added on{" "}
                            {video.added_at
                                ? new Date(video.added_at).toLocaleDateString()
                                : ""}
                        </span>

                        <span className="text-emerald-600 font-medium">
                            🎥 Course Video
                        </span>
                    </div>

                </div>
            </div>
        </>
    )


}

export default CourseVideos