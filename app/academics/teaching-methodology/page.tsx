'use client';

import React from 'react';
import Link from 'next/link';

export default function TeachingMethodologyPage() {
  return (
    <div className="bg-gradient-to-br from-[#f9f6fb] to-white min-h-screen font-serif py-12 px-4">
      <div className="max-w-6xl mx-auto">
         <Link href="/" className="text-[#800000] text-lg font-semibold flex items-center gap-2 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7M5 12h14"
            />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#800000] mb-8">Teaching Methodology</h1>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#800000] to-[#800000] rounded-full mb-12"></div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            Abhishek International School follows the CBSE pattern. Our teaching philosophy emphasizes a student-centered approach driven by inquiry, collaboration, and interdisciplinary learning.
          </p>

          <p>
            We encourage curiosity and confidence in key learning skills such as reading, writing, speaking, listening, information technology, problem-solving, management, and observation.
          </p>

          <p>
            This is achieved using interactive and engaging teaching methods including:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Games and playful learning activities</li>
            <li>Creative projects and art integration</li>
            <li>Debates, quizzes, and group discussions</li>
            <li>Role-plays and dramatization</li>
            <li>Graphic organizers and visual learning tools</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#800000] mt-8">CCE: Continuous and Comprehensive Evaluation</h2>
          <p>
            In line with CBSE guidelines, the school implements CCE — a holistic school-based evaluation system covering both scholastic and co-curricular development.
          </p>

          <p>
            This approach aims to reduce stress on students while nurturing good health, life skills, creativity, and social values. Assessments are done continuously and comprehensively to support a well-rounded personality.
          </p>

          <h2 className="text-2xl font-semibold text-[#800000] mt-8">Smart Learning Integration</h2>
          <p>
            Leveraging today’s digital advancements, we incorporate smart learning tools that enable students to acquire knowledge more efficiently and conveniently. This includes interactive digital content, smart boards, and personalized learning environments.
          </p>

          <p>
            Our goal is to make education more accessible, immersive, and effective for all learners.
          </p>
        </div>
      </div>
    </div>
  );
}