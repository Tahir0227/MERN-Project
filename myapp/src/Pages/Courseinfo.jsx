import React from 'react'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router'

function Courseinfo() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-12">

                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* LEFT: Course Image / Tech */}
                        <div className="flex justify-center">
                            <div className="bg-gray-50 rounded-xl shadow-md p-6 w-full flex justify-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                                    alt="MERN Stack"
                                    className="max-h-48 object-contain"
                                />
                            </div>
                        </div>

                        {/* RIGHT: Course Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                IIT-MERN-2025
                            </h1>

                            <p className="text-gray-600 mb-6">
                                MERN Stack Development
                            </p>

                            <div className="space-y-3 text-gray-700">
                                <p>
                                    <span className="font-semibold">Start Date:</span> 10/12/2025
                                </p>
                                <p>
                                    <span className="font-semibold">End Date:</span> 05/01/2026
                                </p>
                                <p>
                                    <span className="font-semibold">Fees:</span> ₹4000
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-8">
                                <Link
                                    to="/register"
                                    className="inline-block px-6 py-3 rounded-lg
                             bg-emerald-500 text-white
                             font-semibold hover:bg-emerald-600
                             transition shadow-md"
                                >
                                    Register to Course
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Courseinfo
