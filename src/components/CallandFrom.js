"use client"
import Link from 'next/link';
import React from 'react';

export default function CallFooter(){
    const handleCallNow = () => {
    window.open('tel:+919820919196', '_blank');
  };
    return(
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-50 md:hidden shadow-lg">
        <div className="flex gap-3">
          <Link 
            href="/contact"
            className="flex-1 bg-amber-500 text-white py-3 px-4 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          >
            Contact Us
          </Link>
          <button 
            onClick={handleCallNow}
            className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          >
            Call Now
          </button>
        </div>
      </div>
    </>
    )
}



