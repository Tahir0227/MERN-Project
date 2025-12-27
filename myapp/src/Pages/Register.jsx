import { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
                    IIT-MERN-2025
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-700">
                    Fees (₹)
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    4000
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
