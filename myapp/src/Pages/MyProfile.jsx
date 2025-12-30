import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'

function MyProfile() {

    const [info, setInfo] = useState([])

    useEffect(() => {
        console.log('Profile component loaded')
        loadInfo()
    }, [])

    const loadInfo = async () => {
        const token = localStorage.getItem('token')
        const result = await getProfile(token)
        if (result.status == 'success') {
            setInfo(result.data[0])
        }
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 flex justify-center items-center px-4">

                {/* Profile Card */}
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

                    {/* Profile Image */}
                    <div className="flex justify-center -mt-16">
                        <img
                            src="https://via.placeholder.com/120"
                            alt="profile"
                            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                        />
                    </div>

                    {/* Name */}
                    <div className="text-center mt-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Sarthak Katkar
                        </h2>
                        <p className="text-sm text-gray-500">
                            Student
                        </p>
                    </div>

                    {/* Divider */}
                    <hr className="my-6" />

                    {/* Profile Details */}
                    <div className="space-y-4 text-gray-700">

                        <div className="flex justify-between items-center">
                            <span className="font-medium"> Email</span>
                            <span className="text-gray-600">sarthak@email.com</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="font-medium"> Mobile</span>
                            <span className="text-gray-600">+91 98765 43210</span>
                        </div>

                    </div>

                    {/* Edit Button */}
                    <div className="mt-8">
                        <button
                            className="w-full bg-emerald-500 text-white
                         font-semibold py-2.5 rounded-lg
                         hover:bg-emerald-600 transition shadow-md"
                        >
                            Edit Profile
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MyProfile
