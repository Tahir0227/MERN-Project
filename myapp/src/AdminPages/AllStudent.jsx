import React, { useEffect, useState } from 'react'
import AdminNavbar from '../Component/AdminNavbar'
import Dashboard from '../Component/Dashboard'
import { getAllCourses, getAllStudent } from '../Services/adminServices'

function AllStudent() {

    const [selectedCourse, setSelectedCourse] = useState('')
    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadStudents()
        loadCourses()
    }, [])

    const loadStudents = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllStudent(token)
        if (result.status == 'success') {
            setStudents(result.data)
        }
    }

    const loadCourses = async () => {
        const token = localStorage.getItem('token')
        const result = await getAllCourses(token)
        if (result.status == 'success') {
            setCourses(result.data)
        }
    }

    const filteredStudents =
        selectedCourse === ''
            ? students
            : students.filter(s => String(s.course_id) === String(selectedCourse))


    return (
        <>
            <AdminNavbar />
            <Dashboard />

            {/* MAIN CONTENT */}
            <div className="ml-64 min-h-screen bg-gradient-to-br from-emerald-100 via-white to-blue-100 px-6 py-10">

                {/* Header */}
                <div className="max-w-7xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 items-center">

                    {/* Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Filter by Course
                        </label>
                        <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="px-4 py-2 rounded-lg border
                                    focus:ring-2 focus:ring-emerald-400 outline-none"
                        >
                            <option value="All">All Courses</option>

                            {courses.map(course => (
                                <option key={course.Course_id} value={course.Course_id}>
                                    {course.course_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        All Students
                    </h2>

                    <div></div>
                </div>

                {/* Students Table Card */}
                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Card Header */}
                    <div className="px-6 py-4 bg-emerald-50 border-b">
                        <p className="text-sm text-gray-600">
                            Total Students: <span className="font-semibold">{filteredStudents.length}</span>
                        </p>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">

                            <thead className="bg-emerald-600 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left">Reg No</th>
                                    <th className="px-6 py-3 text-left">Name</th>
                                    <th className="px-6 py-3 text-left">Email</th>
                                    <th className="px-6 py-3 text-left">Course</th>
                                    <th className="px-6 py-3 text-left">Mobile</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                {filteredStudents.map((student, index) => (
                                    <tr
                                        key={student.reg_no}
                                        className={`hover:bg-emerald-50 transition
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                    >
                                        <td className="px-6 py-3">{student.reg_no}</td>
                                        <td className="px-6 py-3 font-medium text-gray-800">
                                            {student.name}
                                        </td>
                                        <td className="px-6 py-3 text-gray-600">
                                            {student.emial}
                                        </td>
                                        <td className="px-6 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${student.course_id === 'N/A'
                                                        ? 'bg-gray-200 text-gray-600'
                                                        : 'bg-emerald-100 text-emerald-700'}`}
                                            >
                                                {student.course_id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3">{student.mobile_no}</td>
                                    </tr>
                                ))}

                                {filteredStudents.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                            No students found for selected course.
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AllStudent
