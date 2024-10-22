import React, { useEffect, useState } from 'react';
import './FeaturedCourses.css'; // Custom styles for animation

const FeaturedCourses = () => {
  const [showCourses, setShowCourses] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('courses');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setShowCourses(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      name: 'Data Structures',
      description: 'Learn data structures with practical projects and in-depth lectures.',
      image: '/img/dsa.webp' // Example image
    },
    {
      name: 'Machine Learning',
      description: 'Explore machine learning techniques and applications.',
      image: '/img/machine_learning.avif' // Example image
    },
    {
      name: 'Algorithms',
      description: 'Master algorithms with step-by-step explanations and projects.',
      image: '/img/algo.jpg' // Example image
    },
    {
      name: 'Web Development',
      description: 'Build responsive websites using modern web technologies.',
      image: '/img/webdev.webp' // Example image
    },
    {
      name: 'Artificial Intelligence',
      description: 'Dive into AI concepts and real-world applications.',
      image: '/img/AI.webp' // Example image
    },
    {
      name: 'Cloud Computing',
      description: 'Understand cloud technologies and architecture with hands-on labs.',
      image: '/img/cloud_comp.webp' // Example image
    }
  ];

  return (
    <section id="courses" className="bg-white py-16">
      <div className="container mx-auto px-5 lg:px-20">
        
        {/* Section Heading */}
        <h2 className="text-xl font-bold text-center text-gray-600 ">
          Featured Courses and Professional Certificates
        </h2>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Learn with the Best
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`course-card transition-transform duration-300 ease-in-out p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 ${
                showCourses ? 'fade-in-up' : ''
              }`}
            >
              <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{course.name}</h3>
              <p className="text-gray-600">{course.description}</p>
              <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition-colors">
                Explore Course
              </button>
            </div>
          ))}
        </div>

        {/* Browse All Courses Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors">
            Browse All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;