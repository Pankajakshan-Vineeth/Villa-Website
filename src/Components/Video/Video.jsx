import React from 'react'
import './Video.css'
import frame from '../../assets/video-frame.jpg'
import play from '../../assets/play.png'

const Video = () => {
  return (
    <div className='video-container'>
      <div className='video-text'>
        <p>| VIDEO VIEW</p>
        <h1 className='h1-text'>Get Closer View & Different Feeling</h1>
      </div>
      <div className='second-image'>
        <img src={frame}alt="" className='frame-image' />
        <img src={play}alt="" className='play-icon'/>
      </div>
    </div>
  )
}

export default Video
