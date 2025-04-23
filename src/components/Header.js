import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>

            {/* 네비게이션바 */}
            <div id="navbar" >
                <div className='navbar_left'>
                    <Link href={"/projects_test"} className='navbar_left_Link'>

                    <Image className='image_s_logo' src={"/images/s_logo.jpg"} width={50} height={50} alt="project image" />
                    <span className='image_s_loge_text'>SMS</span>
                    </Link>
                </div>

                <nav>
                    <ul>
                    <li><Link href={"/projects_test"}>Project</Link></li>

                        {/* <li><Link href={"/"}>Home</Link></li> */}
                        {/* <li><Link href={"/introduction"}>Introduction</Link></li> */}
                        <li><Link href={"/about_test"}>About</Link></li>
                        {/* <li><Link href={"/contact"}>Contact</Link></li> */}
                        <li><Link href={"/team_test"}>Team</Link></li>
                        {/* <li><Link href={"/projects_test"}>Project</Link></li> */}




                        {/* <li><Link href={""}>Login</Link></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
