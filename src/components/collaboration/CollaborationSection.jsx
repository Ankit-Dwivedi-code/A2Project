import React from 'react';

const CollaborationSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-5 lg:px-20">
        
        {/* Section Title with clickable link */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          We collaborate with{' '}
          <a href="#collaborators" className="text-blue-600 underline hover:text-blue-800">
            leading companies and institutions
          </a>
        </h2>
        
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 ">
          {/* Replace src with your logos */}
          <img 
            src="/img/google.png" 
            alt="Google" 
            className="h-16 md:h-24 cursor-pointer"
          />
          <img 
            src="/img/facebook.png" 
            alt="Facebook" 
            className="h-16 md:h-24 cursor-pointer"
          />
          <img 
            src="/img/samsung.png" 
            alt="Samsung" 
            className="h-16 md:h-24 cursor-pointer"
          />
          <img 
            src="/img/ibm.png" 
            alt="IBM" 
            className="h-16 md:h-24 cursor-pointer"
          />
          <img 
            src="/img/amazon.png" 
            alt="Amazon" 
            className="h-16 md:h-24 cursor-pointer"
          />
          <img 
            src="/img/microsoft.png" 
            alt="Microsoft" 
            className="h-16 md:h-24 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
