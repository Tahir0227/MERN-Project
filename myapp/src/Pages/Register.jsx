import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { registerToCourse, getCourseInfo } from "../Services/studentServices";
import { toast } from "react-toastify";

export default function Register() {

    const navigate = useNavigate();

    const { id } = useParams()
    const [course, setCourse] = useState([])
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [mobileNo, SetMobileNo] = useState('')

    useEffect(() => {
        console.log("register component loaded")
        getCourse()
    }, [])

    const getCourse = async () => {
        const result = await getCourseInfo(id)
        console.log(result)
        if (result.status == "success") {
            setCourse(result.data[0])
        }
    }

    const register = async (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            toast.warn('name must be entered');
        } else if (email.trim() === '') {
            toast.warn('email must be entered');
        } else if (mobileNo.trim() === '') {
            toast.warn('mobile number must be entered');
        }
        else {
            const result = await registerToCourse(name, email, id, mobileNo);
            console.log(result)
            if (result.status === 'success') {
                toast.success('Register successful');
                navigate('/home');
            }
            else {
                toast.error('Already registerd to this course')
            }
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-4">
            <div className="w-full max-w-md">

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6">

                    {/* Course Info Table */}
                    <div className="mb-6">
                        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-2 font-semibold text-gray-700">
                                        Course Name
                                    </td>
                                    <td className="px-4 py-2 text-gray-600">
                                        {course.course_name}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 font-semibold text-gray-700">
                                        Fees (₹)
                                    </td>
                                    <td className="px-4 py-2 text-gray-600">
                                        {course.fees}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                        Register to Course
                    </h3>

                    {/* Form */}
                    <form onSubmit={register}>

                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your name"
                                onChange={e => setName(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-emerald-400 outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={e => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-emerald-400 outline-none"
                            />
                        </div>

                        {/* Mobile */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Enter your mobile number"
                                onChange={e => SetMobileNo(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                           focus:ring-2 focus:ring-emerald-400 outline-none"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-600
                         text-white font-semibold py-2.5 rounded-lg
                         shadow-md transition"
                        >
                            Register
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}