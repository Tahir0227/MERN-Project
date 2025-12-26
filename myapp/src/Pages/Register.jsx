import { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    gender: "Male",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-100 via-white to-blue-100">
      <div className="w-[450px] animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl p-7">

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-gray-800">
            Course Registration
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Enroll now to start learning
          </p>

          {/* Course Table */}
          <div className="mb-6">
            <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-emerald-500 text-white">
                <tr>
                  <th className="py-2 px-3 text-left">Course</th>
                  <th className="py-2 px-3 text-right">Fees (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 px-3">Python + AI</td>
                  <td className="py-2 px-3 text-right">50,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Registration Form */}
          <form onSubmit={register}>
            {/* First Name */}
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Re-type Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Contact */}
            <div className="mb-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Gender */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300
                focus:ring-2 focus:ring-emerald-400 outline-none"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600
              text-white font-bold py-2.5 rounded-xl
              shadow-md hover:shadow-lg transition-all duration-300"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
