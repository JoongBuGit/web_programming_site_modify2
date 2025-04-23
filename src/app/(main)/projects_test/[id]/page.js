import React from 'react';
import "@/app/(main)/projects_test/[id]/page.css"
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="container">
      {/* 헤더 */}
      <header className="header">
        <h1 className="header-title">팀 프로젝트</h1>
        {/* <p className="header-subtitle">실시간 협업이 가능한 태스크 관리 웹 앱</p> */}
      </header>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 프로젝트 개요 */}
        <div className="project-overview">
          <h2 className="section-title">개요</h2>
          <Image
            width={700}
            height={500}
            className="project-image"
            src="/images/team_project.png"
            alt="프로젝트 1"
          />
          <p className="project-description">
            팀프로젝트 Tralalero Tralala는 간단한 블록체인을 구현한 서비스입니다. 블록체인의 개념에 대해서 간단하게 설명했으니 이해해보려 노력해보고 블록체인도 채굴해보세요!
          </p>
          <h3 className="subsection-title">사용 기술</h3>
          <div className="tech-stack">
            <span className="tech-item">Javascript</span>
            <span className="tech-item">Css</span>
            <span className="tech-item">Html</span>
          </div>
          <h3 className="subsection-title">링크</h3>
          <div className="links">
            <Link href="https://web-programming-team-project.vercel.app/" className="link-button live-demo">
              라이브 데모
            </Link>
            <Link href="https://github.com/JoongBuGit/Web_Programming_Team_Project" className="link-button github">
              GitHub
            </Link>
          </div>
          {/* <Link href="/projects" className="back-link">
            ← 프로젝트 목록으로 돌아가기
          </Link> */}
        </div>

        {/* 별도의 사진 갤러리 섹션 */}
        <div className="gallery-section">
          <h2 className="section-title">사진 갤러리</h2>
          <div className="gallery">
            <img
              className="gallery-image"
              src="https://via.placeholder.com/800x600"
              alt="스크린샷 1"
            />
            <img
              className="gallery-image"
              src="https://via.placeholder.com/800x600"
              alt="스크린샷 2"
            />
            <img
              className="gallery-image"
              src="https://via.placeholder.com/800x600"
              alt="스크린샷 3"
            />
          </div>
        </div>
      </main>
    </div>
  );
}