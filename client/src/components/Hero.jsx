import React from 'react';
import BlobCanvas from './BlobCanvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
  {/* 🟣 3D Blob Background */}
  <BlobCanvas />

  {/* Hero Content */}
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center max-w-2xl mx-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Hi, I'm <span className="text-indigo-400">Vishnuvardhan Chappidi</span>
    </h1>

    <p className="mt-4 text-lg sm:text-xl text-gray-300">
      Full Stack & AI Engineer building smart solutions with GenAI and clean code.
    </p>

    <p className="mt-2 text-sm text-gray-400">
      Ask me anything about my work, skills, or experience 👇
    </p>

    <a
      href="#agent"
      className="mt-8 inline-block bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
    >
      Ask My Portfolio 🤖
    </a>
  </div>
</section>

  );
};

export default Hero;
