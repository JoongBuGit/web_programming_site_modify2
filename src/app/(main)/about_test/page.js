import React from 'react'
import "@/app/(main)/about_test/page.css"

export default function about_page() {
  return (
 
<div className='body'>
    <div className="navbar">
        {/* <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a> */}
    </div>
    <div className="container">
        <h1>About Me</h1>
        {/* <img src="https://via.placeholder.com/150" alt="Profile Picture" className="profile-img"> */}
        <p>
            안녕하세요 중부대학교 정보보호학과 송명석입니다. 이 포트폴리오 사이트에 제가 많든 프로젝드들을 올려놨습니다!
        </p>
        <p>
            각 포트폴리오를 들어가면 상세한 설명과 실행중인 데모프로젝트를 볼 수 있습니다.
        </p>
        <div className="contact-info">
            <p>Email: <a href="mailto:your.email@example.com">joongbu_re25@jmail.ac.kr</a></p>
            <p>GitHub: <a href="https://github.com/yourusername">https://github.com/JoongBuGit?tab=repositories</a></p>
        </div>
    </div>
</div>

  )
}
