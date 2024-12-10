import React from 'react';

// Footer component definition
export default function Footer() {
  return (
    // Footer container
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      
      {/* Upper Section: Intro and Navigation Lists */}
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        
        {/* Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          {/* Logo */}
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">MORENT</h1>
          {/* Description */}
          <p className="text-gray-500 text-center lg:text-left w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>
        
        {/* Navigation Lists */}
        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          
          {/* About Section */}
          <div className="about">
            <ul className="flex flex-col gap-1">
              {/* Section Heading */}
              <li className="font-bold text-lg"><h1>About</h1></li>
              {/* List Items */}
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          
          {/* Community Section */}
          <div className="community">
            <ul className="flex flex-col gap-1">
              {/* Section Heading */}
              <li className="font-bold text-lg"><h1>Community</h1></li>
              {/* List Items */}
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          
          {/* Socials Section */}
          <div className="socials">
            <ul className="flex flex-col gap-1">
              {/* Section Heading */}
              <li className="font-bold text-lg"><h1>Socials</h1></li>
              {/* List Items */}
              <li>Discord</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Divider Line */}
      <div className="line border-t w-full border-[#e7eef6]"></div>
      
      {/* Lower Section: Footer Details */}
      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        
        {/* Copyright Notice */}
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        
        {/* Privacy & Terms Links */}
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
