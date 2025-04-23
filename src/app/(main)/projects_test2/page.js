'use client'
import React from 'react'
import "@/app/(main)/projects_test/page.css"

export default function page() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                <header className="bg-blue-800 text-white text-center py-12">
                    <h1 className="text-4xl font-bold">My Projects</h1>
                    <p className="mt-2 text-lg">A showcase of my work</p>
                </header>
                <main className="max-w-4xl mx-auto px-4 py-8">
                    <div className="space-y-8">
                        {/* <!-- Project 1 --> */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img
                                        className="h-48 w-full object-cover md:h-full md:w-48"
                                        src="https://via.placeholder.com/300x200"
                                        alt="Project One"
                                    />
                                </div>
                                <div className="p-6 flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Project One</h2>
                                    <p className="text-gray-600 mb-4">
                                        A web app for managing tasks with real-time collaboration.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            Next.js
                                        </span>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            Firebase
                                        </span>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            Tailwind
                                        </span>
                                    </div>
                                    <a
                                        href="https://example.com/project1"
                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Project 2 --> */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img
                                        className="h-48 w-full object-cover md:h-full md:w-48"
                                        src="https://via.placeholder.com/300x200"
                                        alt="Project Two"
                                    />
                                </div>
                                <div className="p-6 flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Two</h2>
                                    <p className="text-gray-600 mb-4">
                                        An e-commerce platform with advanced search features.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            React
                                        </span>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            Node.js
                                        </span>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            MongoDB
                                        </span>
                                    </div>
                                    <a
                                        href="https://example.com/project2"
                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Project 3 --> */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img
                                        className="h-48 w-full object-cover md:h-full md:w-48"
                                        src="https://via.placeholder.com/300x200"
                                        alt="Project Three"
                                    />
                                </div>
                                <div className="p-6 flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Three</h2>
                                    <p className="text-gray-600 mb-4">
                                        A portfolio website showcasing creative designs.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            Next.js
                                        </span>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            Framer Motion
                                        </span>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                            CSS
                                        </span>
                                    </div>
                                    <a
                                        href="https://example.com/project3"
                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
