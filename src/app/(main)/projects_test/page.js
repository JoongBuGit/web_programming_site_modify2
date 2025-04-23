'use client'
import React from 'react'
import "@/app/(main)/projects_test/page.css"
import Link from 'next/link'
import Image from 'next/image'
import Buttion from '@/components/Button/Button'

export default function page() {
    return (
        <div className='container-bg'>
            <div className="content-wrapper">
                <header className="header">
                    <h1 className="header-title">내 프로젝트</h1>
                    <p className="header-subtitle"></p>
                </header>
                <main className="main-content">
                    <div className="projects-container">
                        {/* Project 1 */}
                        <div className="project-card">
                            <div className="project-content">
                                <div className="project-image-container">
                                    <Image 
                                        width="400"
                                        height="300"
                                        className="project-image"
                                        src="/images/project1.png"
                                        alt="Project One"
                                    />
                                </div>
                                <div className="project-details">
                                    <h2 className="project-title">프로젝트 1</h2>
                                    <p className="project-description">
                                        개인 홈페이지를 만든 프로젝트
                                    </p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">
                                            Next.js
                                        </span>
                                        <span className="tech-tag">
                                            Firebase
                                        </span>
                                        <span className="tech-tag">
                                            Tailwind
                                        </span>
                                    </div>
                                    <a
                                        href="https://example.com/project1"
                                        className="project-link"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Project 2 */}
                        <div className="project-card">
                            <div className="project-content">
                                <div className="project-image-container">
                                    <img
                                        className="project-image"
                                        src="/images/project2.png"
                                        alt="Project Two"
                                    />
                                </div>
                                <div className="project-details">
                                    <h2 className="project-title">프로젝트 2</h2>
                                    <p className="project-description">
                                        간단한 쇼핑몰 프로젝트
                                    </p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">
                                            React
                                        </span>
                                        <span className="tech-tag">
                                            Node.js
                                        </span>
                                        <span className="tech-tag">
                                            MongoDB
                                        </span>
                                    </div>
                                    <a
                                        href="https://example.com/project2"
                                        className="project-link"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="project-card">
                            <div className="project-content">
                                <div className="project-image-container">
                                    <img
                                        className="project-image"
                                        src="/images/team_project.png"
                                        alt="Project Three"
                                    />
                                </div>

                                <Link href="/projects_test/3">
                                
                                <div className="project-details">
                                    <h2 className="project-title">팀 프로젝트</h2>
                                    <p className="project-description">
                                        간단한 블록체인을 구현한 프로젝트
                                    </p>
                                    <div className="tech-tags">
                                        <span className="tech-tag">
                                            Next.js
                                        </span>
                                        <span className="tech-tag">
                                            Framer Motion
                                        </span>
                                        <span className="tech-tag">
                                            CSS
                                        </span>
                                    </div>
                                    <div
                                        href="https://example.com/project3"
                                        className="project-link"
                                    >
                                        View Project
                                    </div>
                                </div></Link>

                                
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Buttion>새 프로젝트</Buttion>
        </div>
    )
}