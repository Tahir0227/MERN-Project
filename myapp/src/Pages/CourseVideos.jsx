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
      py-8 px-6"
            >
                <div className="max-w-6xl mx-auto">

                    {/* Back Button */}
                    <button
                        className="mb-4 inline-flex items-center gap-2
          bg-gray-600 text-white px-4 py-2 rounded-md
          hover:bg-gray-700 transition"
                        onClick={() =>
                            navigate(`/my-course-info/${video.Course_id}`)
                        }
                    >
                        ← Back to Courses
                    </button>

                    {/* Video Title */}
                    <h2 className="text-3xl font-bold text-gray-800">
                        {video.course_name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-5">
                        {video.description}
                    </p>

                    {/* Video Player */}
                    <div
                        className="bg-black rounded-xl overflow-hidden shadow-2xl
          aspect-video w-full"
                    >
                        <iframe
                            className="w-full h-full"
                            // src='https://www.youtube-nocookie.com/embed/iPCWamt3XME'
                            src={getEmbedUrl(video.youtube_url)}
                            title="MERN Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Added Date */}
                    <p className="text-sm text-gray-500 mt-3">
                        Added at : {new Date(video.added_at).toLocaleDateString()}
                    </p>


                </div>
            </div>
        </>
    )
}

export default CourseVideos