import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { loginUser } from '../Services/userServices';
import { LoginContext } from '../App'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { loginStatus, setLoginStatus } = useContext(LoginContext)

  const signin = async (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      toast.warn('Email must be entered');
    } else if (password.trim() === '') {
      toast.warn('Password must be entered');
    } else {
      const result = await loginUser(email, password);
      console.log(result)
      if (result.status === 'success') {
        localStorage.setItem('token', result.data.token)
        setLoginStatus(true)
        toast.success('Login successful');
        navigate('/home');
      } else {
        toast.error('Invalid credentials');
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-100 via-white to-blue-100">

      <div className="w-[400px] animate-fade-in">
        <div className="bg-white rounded-3xl shadow-2xl p-7">

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-gray-800">
            Login
          </h3>
          <p className="text-sm text-gray-500 mb-5">
            Sign in to access your account
          </p>

          <form>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="form-control rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="form-control pr-12 rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                />

                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center
                           text-gray-400 hover:text-emerald-500
                           focus:outline-none"
                >
                  <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} text-lg`}></i>
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600
                       text-white font-bold py-2.5 rounded-xl
                       shadow-md hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-5">
            <small className="text-gray-500">
              Forgot password?
              <a
                href="#"
                className="text-emerald-600 font-semibold ms-1 hover:underline"
              >
                Reset here
              </a>
            </small>
          </div>

        </div>
      </div>

    </div>
  );


};

export default LoginForm;
