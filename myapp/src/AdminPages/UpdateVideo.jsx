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
    console.log(result)
    if (result.status === "success") {
      toast.success("Video updated successfully!");
      navigate(-1);
    } else {
      toast.error("Failed to update video");
    }
  };

  return (
    <>
      <AdminNavbar />
      <Dashboard />

      <div className="min-h-screen flex items-center justify-center
                      bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-4">
        <div className="w-full max-w-2xl">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-2 bg-emerald-400"></div>

            <div className="p-8">
              <h2 className="text-2xl font-extrabold text-gray-800">
                Edit Video
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Update video details for this course
              </p>

              <form onSubmit={videoUpdated} className="space-y-5">

                {/* Course */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Course
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="mt-1 w-full rounded-lg border px-4 py-2.5
                               focus:ring-2 focus:ring-emerald-400 outline-none"
                  >
                    {courses.map(course => (
                      <option key={course.Course_id} value={course.Course_id}>
                        {course.course_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Video Title */}
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Video Title
                  </label>
                  <input
                    type="text"
                    value={video.title}
                    onChange={(e) =>
                      setVideo({ ...video, title: e.target.value })
                    }
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
                    value={video.youtube_url}
                    onChange={(e) =>
                      setVideo({ ...video, youtube_url: e.target.value })
                    }
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
                    value={video.description}
                    onChange={(e) =>
                      setVideo({ ...video, description: e.target.value })
                    }
                    className="mt-1 w-full rounded-lg border px-4 py-2.5
                               focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600
                             text-white py-3 rounded-xl font-bold
                             hover:scale-[1.02] transition shadow-lg"
                >
                  Update Video
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default EditVideo;
