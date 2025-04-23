import Buttion from '@/components/Button/Button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        
        <div>page</div>


        <Link href="/projects/new">     <Buttion>New Project</Buttion>   </Link>


        
    </div>
  )
}
