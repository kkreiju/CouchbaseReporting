import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const teamMembers = [
    {
      name: "Blaise Lorenz T. Bernabe",
      role: "Hipster",
      image: "/lorenz.png",
    },
    {
      name: "Arjay Niño G. Saguisa",
      role: "Hacker",
      image: "/arjay.jpg",
    },
    {
      name: "John Reddick F. Quijano",
      role: "Hustler",
      image: "/red.jpg",
    },
  ];

  // Presentation slides state
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 7;
  const presentationRef = useRef(null);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? totalSlides : currentSlide - 1);
  };

  // Fullscreen function
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (presentationRef.current.requestFullscreen) {
        presentationRef.current.requestFullscreen();
      } else if (presentationRef.current.webkitRequestFullscreen) {
        presentationRef.current.webkitRequestFullscreen();
      } else if (presentationRef.current.msRequestFullscreen) {
        presentationRef.current.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  // Define placeholder slides (you will replace these with your actual images)
  const slides = [
    { id: 1, src: "/1.png" },
    { id: 2, src: "/2.png" },
    { id: 3, src: "/3.png" },
    { id: 4, src: "/4.png" },
    { id: 5, src: "/5.png" },
    { id: 6, src: "/6.png" },
    { id: 7, src: "/7.png" },
  ];

  // Add event listener for keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-[#05061B]">
      <Navbar />

      <main className="container mx-auto px-4 py-16 text-center">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-15">
          <div className="mb-6">
            <img
              src="/couchbase.png"
              alt="Couchbase Logo"
              className="h-24 w-auto"
            />
          </div>
          <h1 className="text-7xl font-bold mb-4 text-white">Couchbase</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Best Free NoSQL Cloud Database Platform
          </p>

          {/* Team Section */}
          <div className="mt-16 mb-24">
            <h2 className="text-4xl font-bold mb-12 text-white">Our Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#1B1F37] rounded-lg overflow-hidden shadow-lg w-64"
                >
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-l font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presentation Slide Section */}
          <div className="mt-3">
            <h2 className="text-4xl font-bold mb-12 text-white">
              Presentation
            </h2>
            <div
              ref={presentationRef}
              className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="relative w-full aspect-[16/9] bg-[#0A0C22]">
                {/* Image Container */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* Here you'll put your slide images */}
                  <img
                    src={slides[currentSlide - 1].src}
                    alt={`Slide ${currentSlide}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Slide Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <div className="inline-flex items-center justify-center bg-gray-300/80 rounded-full px-3 py-1">
                    <span className="text-sm font-medium">
                      {currentSlide} / {totalSlides}
                    </span>
                  </div>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullScreen}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-400/30 hover:bg-gray-400/50 rounded-full flex items-center justify-center text-white"
                  aria-label="Toggle fullscreen"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-gray-400/30 hover:bg-gray-400/50 rounded-full flex items-center justify-center text-white"
                  aria-label="Previous slide"
                >
                  &larr;
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-gray-400/30 hover:bg-gray-400/50 rounded-full flex items-center justify-center text-white"
                  aria-label="Next slide"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
