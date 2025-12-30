import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router'
import { getProfile } from '../Services/studentServices'
import { toast } from 'react-toastify'
import { updateProfile } from '../Services/studentServices'

export default function EditProfile() {

    const navigate = useNavigate()
    const [info, setInfo] = useState({ emial: "", profile_pic: "" });
    const [name, setName] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [password, setPassword] = useState('')
    const [con_password, setCon_Password] = useState('')


    const updateDetails = async (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            toast.warn('Name must be entered');
        } else if (password.trim() === '') {
            toast.warn('Password must be entered');
        } else if (con_password.trim() === '') {
            toast.warn('Password must be entered');
        } else if (mobileNo.trim() === '') {
            toast.warn('Mobile number must be entered');
        } else if (password.trim() != con_password.trim()) {
            toast.warn('Password and confirm password different');
        } else {
            const token = localStorage.getItem('token')
            const result = await updateProfile(token, name, mobileNo, password);
            console.log(result)
            if (result.status === 'success') {
                toast.success('update successful');
                navigate('/profile');
            } else {
                toast.error('not updated');
            }
        }
    }

    useEffect(() => {
        console.log('Edit-Profile component loaded')
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

            <div className="h-[calc(100vh-4rem)]
                      bg-gradient-to-br from-emerald-100 via-white to-blue-100
                      flex items-center justify-center px-6">

                <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="bg-emerald-500 px-8 py-4 text-white">
                        <h2 className="text-xl font-bold">Edit Profile</h2>
                        <p className="text-emerald-100 text-sm">
                            Update your personal details
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3">

                        {/* LEFT: Profile Image */}
                        <div className="flex flex-col items-center justify-center
                            p-6 border-r">

                            <img
                                src={info.profile_pic}
                                alt="profile"
                                className="w-32 h-32 rounded-full object-cover
                           border-4 border-emerald-500 shadow-md"
                            />

                            <button
                                className="mt-3 text-sm font-semibold
                           text-emerald-600 hover:underline"
                            >
                                Change Photo
                            </button>
                        </div>

                        {/* RIGHT: Form */}
                        <div className="md:col-span-2 p-8">

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Email (readonly) */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={info.emial}
                                        disabled
                                        className="w-full px-4 py-2 rounded-lg
                               border bg-gray-100 text-gray-500
                               cursor-not-allowed"
                                    />
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Enter name"
                                        className="w-full px-4 py-2 rounded-lg
                               border focus:ring-2
                               focus:ring-emerald-400 outline-none"
                                    />
                                </div>

                                {/* Mobile */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Mobile Number
                                    </label>
                                    <input
                                        onChange={(e) => setMobileNo(e.target.value)}
                                        type="text"
                                        placeholder="Enter mobile"
                                        className="w-full px-4 py-2 rounded-lg
                               border focus:ring-2
                               focus:ring-emerald-400 outline-none"
                                    />
                                </div>

                                {/* Passwords */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        New Password
                                    </label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="New password"
                                        className="w-full px-4 py-2 rounded-lg
                               border focus:ring-2
                               focus:ring-emerald-400 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                                        Confirm Password
                                    </label>
                                    <input
                                        onChange={(e) => setCon_Password(e.target.value)}
                                        type="password"
                                        placeholder="Confirm password"
                                        className="w-full px-4 py-2 rounded-lg
                               border focus:ring-2
                               focus:ring-emerald-400 outline-none"
                                    />
                                </div>

                                {/* Save Button */}
                                <div className="md:col-span-2 flex justify-end pt-2">
                                    <button
                                        onClick={updateDetails}
                                        type="submit"
                                        className="bg-emerald-500 hover:bg-emerald-600
                               text-white font-semibold
                               px-8 py-2.5 rounded-xl
                               transition shadow-md"
                                    >
                                        Save Changes
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
