import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaChevronRight } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the icon visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex items-center"> {/* Visible only on mobile devices (md:hidden) */}
      
      {/* Conditional rendering of WhatsApp and Phone icons */}
      {isOpen && (
        <div className="flex space-x-4 mr-4"> {/* Opens left with space-x-4 */}
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          <a
            href="tel:+919999999999"
            className="bg-blue-600 p-4 rounded-full shadow-lg text-white hover:bg-blue-700 transition duration-300"
          >
            <FaPhoneAlt className="text-xl" />
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <div
        onClick={handleToggle}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition duration-300"
      >
        <FaChevronRight
          className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        /> {/* Arrow rotates when open */}
      </div>
    </div>
  );
};

export default FloatingContactButton;
