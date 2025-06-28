'use client';

import React from 'react';
import { FaArrowLeft, FaHome, FaTruck } from 'react-icons/fa';

const NotFoundPage = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-500"></div>

      <div className="max-w-lg mx-auto text-center relative z-10">
        {/* Icon */}
       

        {/* 404 Number */}
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Main Message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Route Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Looks like this delivery took a wrong turn. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleGoHome}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
          >
            <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Back to Home
          </button>
          
          <button
            onClick={handleGoBack}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl shadow-sm hover:shadow-md hover:border-purple-300 transform hover:scale-105 transition-all duration-300"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
            Services
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
            Contact
          </a>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
            Support
          </a>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;