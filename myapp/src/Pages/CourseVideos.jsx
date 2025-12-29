import Navbar from '../Component/Navbar'

function CourseVideos() {
  return (
    <>
    <Navbar/>
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
        >
          ← Back to Courses
        </button>

        {/* Video Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          MERN 10
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-5">
          some-description
        </p>

        {/* Video Player */}
        <div
          className="bg-black rounded-xl overflow-hidden shadow-2xl
          aspect-video w-full"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="MERN Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Added Date */}
        <p className="text-sm text-gray-500 mt-3">
          Added: 26/11/2025, 23:52:13
        </p>

      </div>
    </div>
   </>
  )
}

export default CourseVideos