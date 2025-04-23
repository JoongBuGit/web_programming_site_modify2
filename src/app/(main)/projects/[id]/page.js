
import React from 'react'

export default async function test_page({params}) {

    const { id } = await params


  return (
    <div>test_page : {id}</div>
  )
}
