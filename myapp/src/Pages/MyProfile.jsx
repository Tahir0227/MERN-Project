import React from 'react'
import Navbar from '../Component/Navbar'

function MyProfile() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-12">

                {/* Profile Wrapper */}
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

                    <div className="grid grid-cols-1 md:grid-cols-3">

                        {/* LEFT: Profile Image Section */}
                        <div className="bg-emerald-500 flex flex-col items-center justify-center p-8 text-white">
                            <img
                                src="https://via.placeholder.com/160"
                                alt="profile"
                                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                            />

                            <h2 className="mt-4 text-2xl font-bold">
                                Sarthak Katkar
                            </h2>
                            <p className="text-emerald-100">
                                Student
                            </p>
                        </div>

                        {/* RIGHT: Profile Details */}
                        <div className="md:col-span-2 p-10">

                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Profile Information
                            </h3>

                            <div className="space-y-6 text-gray-700">

                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-semibold">Email</span>
                                    <span className="text-gray-600">
                                        sarthak@email.com
                                    </span>
                                </div>

                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-semibold">Mobile</span>
                                    <span className="text-gray-600">
                                        +91 98765 43210
                                    </span>
                                </div>

                            </div>

                            {/* Edit Button */}
                            <div className="mt-10">
                                <button
                                    className="px-8 py-3 bg-emerald-500 text-white
                                               font-semibold rounded-xl
                                               hover:bg-emerald-600 transition shadow-md"
                                >
                                    Edit Profile
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile
