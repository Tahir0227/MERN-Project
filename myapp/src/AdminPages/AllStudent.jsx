import React, { useEffect, useState } from 'react'
import AdminNavbar from '../Component/AdminNavbar'
import Dashboard from '../Component/Dashboard'

function AllStudent() {

    const [selectedCourse, setSelectedCourse] = useState('All')
    const [students, setStudents] = useState([])

    useEffect(() => {
        // Temporary static data (API ready)
        setStudents([
            {
                regNo: 1,
                name: 'Student Two',
                email: 's2@email.com',
                course: 'IIT-MERN-2025',
                mobile: '1234567890'
            },
            {
                regNo: 3,
                name: 'Student Three',
                email: 's3@email.com',
                course: 'IIT-MERN-2025',
                mobile: '1234567890'
            },
            {
                regNo: 6,
                name: 'Student Six',
                email: 's6@email.com',
                course: 'N/A',
                mobile: '1234567890'
            }
        ])
    }, [])

    const courses = ['All', 'IIT-MERN-2025', 'AI Fundamentals', 'Android']

    const filteredStudents =
        selectedCourse === 'All'
            ? students
            : students.filter(s => s.course === selectedCourse)

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
                            className="w-full md:w-64 px-4 py-2 rounded-lg border
                         focus:ring-2 focus:ring-emerald-400 outline-none"
                        >
                            {courses.map(course => (
                                <option key={course} value={course}>
                                    {course === 'All' ? 'All Courses' : course}
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
                                        key={student.regNo}
                                        className={`hover:bg-emerald-50 transition
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                    >
                                        <td className="px-6 py-3">{student.regNo}</td>
                                        <td className="px-6 py-3 font-medium text-gray-800">
                                            {student.name}
                                        </td>
                                        <td className="px-6 py-3 text-gray-600">
                                            {student.email}
                                        </td>
                                        <td className="px-6 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${student.course === 'N/A'
                                                        ? 'bg-gray-200 text-gray-600'
                                                        : 'bg-emerald-100 text-emerald-700'}`}
                                            >
                                                {student.course}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3">{student.mobile}</td>
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
