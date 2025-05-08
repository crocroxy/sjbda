import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Team members configuration - easy to add, remove or modify
const teamMembers = [
  {
    name: "Miss. Hanson",
    role: "Founder & CEO",
    image: "/teams/default.jpeg", // Path to image in public/teams folder
    fallbackColor: "from-teal-400 to-blue-500" // Fallback gradient if image doesn't load
  },
  {
    name: "Ray Rahym",
    role: "Technical Operations Director & Managing Directors",
    image: "/teams/ray.png",
    fallbackColor: "from-teal-400 to-blue-500"
  },
  {
    name: "Zayaan",
    role: "Design Engineers & Managing Directors",
    image: "/teams/default.jpeg",
    fallbackColor: "from-teal-400 to-blue-500"
  },
  {
    name: "Obai",
    role: "Design Engineers",
    image: "/teams/default.jpeg",
    fallbackColor: "from-teal-400 to-blue-500"
  },
  {
    name: "Bitto",
    role: "Design Engineers",
    image: "/teams/default.jpeg",
    fallbackColor: "from-teal-400 to-blue-500"
  },
  {
    name: "Ryan",
    role: "Design Engineers",
    image: "/teams/default.jpeg",
    fallbackColor: "from-teal-400 to-blue-500"
  },
  {
    name: "Kai",
    role: "i forgot",
    image: "/teams/default.jpeg",
    fallbackColor: "from-teal-400 to-blue-500"
  },
  {
    name: "Naomi",
    role: "Creative Directors",
    image: "/teams/default.jpeg", // Path to image in public/teams folder
    fallbackColor: "from-teal-400 to-blue-500" // Fallback gradient if image doesn't load
  },
  {
    name: "Aleeza",
    role: "Creative Directors",
    image: "/teams/default.jpeg", // Path to image in public/teams folder
    fallbackColor: "from-teal-400 to-blue-500" // Fallback gradient if image doesn't load
  },
  {
    name: "Ayla",
    role: "Creative Directors",
    image: "/teams/default.jpeg", // Path to image in public/teams folder
    fallbackColor: "from-teal-400 to-blue-500" // Fallback gradient if image doesn't load
  },
    {
    name: "Violet",
    role: "Creative Directors",
    image: "/teams/default.jpeg", // Path to image in public/teams folder
    fallbackColor: "from-teal-400 to-blue-500" // Fallback gradient if image doesn't load
  },

];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-teal-600 to-blue-700">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Contact Us</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white font-medium">
            We're here to answer any questions about our aquaponics systems
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our products or services? Fill out the form and our team will get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-teal-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-teal-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@aquagrow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-teal-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">123 AquaGrow Street, Watertown, 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Team</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Dynamically render team members from the configuration */}
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-square relative">
                    <div className={`w-full h-full bg-gradient-to-br ${member.fallbackColor} overflow-hidden`}>
                      <Image 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-bold text-gray-800 mb-0.5">{member.name}</h3>
                    <p className="text-xs text-teal-600 font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
