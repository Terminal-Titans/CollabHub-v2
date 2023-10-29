import React from 'react'
// import Share from '../../share/Share'
import Post from './Post'
import "./Feed.css"
import {PostsData} from '../assets/dummyData'

export default function Feed() {
    console.log("HI")
  return (
    <div className='feed'>
      <div >
        {/* <Share /> */}
        {/* <p>Hi</p> */}
        {PostsData.map((p) =>  (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}