import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { SquareLoader } from 'react-spinners';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    country: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // State for loading spinner

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.fullname) {
      newErrors.fullname = 'Full name is required';
    }
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with form submission logic
      setLoading(true); // Set loading to true when starting submission
      // Simulate form submission (replace with your API call)
      setTimeout(() => {
        setLoading(false); // Stop loading after submission
        toast.success('Account created successfully!'); // Show success message
        console.log("Form Data: ", formData);
        
        setFormData({ email: '', fullname: '', country: '', password: '' }); // Clear fields
      }, 2000);
    } else {
      // Set errors to show in the form
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.id]: '', // Clear the error message as the user types
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col lg:flex-row w-full lg:w-10/12 xl:w-8/12 shadow-lg rounded-lg overflow-hidden">
        {/* Left Information Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-white p-8 flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">A2 Pyramid</h1>
          <ul className="space-y-6">
            {/* Features */}
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3 text-lg text-gray-600">Get started quickly</span>
            </li>
            <li className="text-sm text-gray-500 ml-9">Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</li>
            {/* Additional Features */}
            <li className="flex items-start">
              <svg className="w-6 h-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3 text-lg text-gray-600">All types of projects</span>
            </li>
            <li className="text-sm text-gray-500 ml-9">MERN, AI, SaaS platforms, and more.</li>
          </ul>
        </div>

        {/* Signup Form Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 flex justify-center items-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Create your account</h2>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Full Name Input */}
              <div className="mb-4">
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
                {errors.fullname && <p className="text-red-600 text-sm mt-1">{errors.fullname}</p>}
              </div>

              {/* Country Input */}
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select your country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
                {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <SquareLoader color="#fff" size={20} /> // Use your Spinner component here
                ) : (
                  'Create account'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/auth/a2/login" className="text-indigo-600 font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Toastify container */}
    </div>
  );
};

export default Signup;
