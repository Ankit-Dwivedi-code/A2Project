import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SquareLoader } from 'react-spinners';
import './Login.css' // Custom CSS for shake effect

const Login = () => {
  const [loading, setLoading] = useState(false); // State for spinner
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [shake, setShake] = useState(false); // State for shake animation

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' })); // Reset error on change
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter your password';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
      setShake(true); // Trigger shake animation
      setTimeout(() => setShake(false), 500); // Remove shake after 500ms
      return;
    }

    setLoading(true); // Show spinner when signing in

    // Simulate login process (you can replace with actual API call)
    setTimeout(() => {
      setLoading(false); // Hide spinner
      setFormData({ email: '', password: '' })
      toast.success('Successfully signed in!'); // Show success message
      console.log('Submitted data:', formData); // Log form data
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <ToastContainer /> {/* Toast container for notifications */}

      {/* Gradient strips */}
      <div
        className="absolute bottom-0 left-0 w-[30px] h-[30px] bg-gradient-to-tr from-[#7B3FE4] to-[#3DC7FB] opacity-75 transform rotate-45 origin-bottom-left"
        style={{ height: 'calc(100% + 30px)', width: '30px' }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-gradient-to-tl from-[#7B3FE4] to-[#3DC7FB] opacity-75 transform -rotate-45 origin-bottom-right"
        style={{ height: 'calc(100% + 30px)', width: '30px' }}
      ></div>

      <div className={`z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md ${shake ? 'shake' : ''}`}>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign in to your account</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/auth/a2/forgotpassword" className="text-sm text-indigo-600 hover:underline">Forgot your password?</Link>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          {/* Sign In Button with Spinner */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-indigo-600 shadow-sm text-sm font-medium text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              disabled={loading}
            >
              {loading ? <SquareLoader color="#fff" size={20} /> : 'Sign in'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
  <p className="text-sm text-gray-600">
    New to A2 Pyramid?{' '}
    <Link to="/auth/a2/signup" className="text-indigo-600 font-medium hover:underline">Create an account</Link>
  </p>
</div>

      </div>
    </div>
  );
};

export default Login;
