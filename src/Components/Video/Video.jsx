import React from 'react'
import './Video.css'
import frame from '../../assets/video-frame.jpg'
import play from '../../assets/play.png'
import orangedot from '../../assets/orange.png'

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
      <div className='orange-dots'> 
      <div className='dot-container'>
       <img src={orangedot} alt="" className='orange-icon' />
       <div className="orange-text">
        <h1>34</h1>
        <p>Buildings Finished Now</p>
       </div>
       </div>
       <div className='dot-container'>
       <img src={orangedot} alt="" className='orange-icon'/>
       <div className="orange-text">
        <h1>34</h1>
        <p>Buildings Finished Now</p>
       </div>
       </div>
       <div className='dot-container'>
       <img src={orangedot} alt="" className='orange-icon'/>
       <div className="orange-text">
        <h1>34</h1>
        <p>Buildings Finished Now</p>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Video
