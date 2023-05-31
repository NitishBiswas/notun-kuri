import React from 'react';
import NotFoundLogo from '../images/header_logo.png'; // Import your custom logo image

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <img src={NotFoundLogo} alt="Not Found Logo" className="w-48 mb-8" />
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found!</h1>
            <p className="text-lg text-gray-600">The page you are looking for does not exist!</p>
        </div>
    );
};

export default NotFound;