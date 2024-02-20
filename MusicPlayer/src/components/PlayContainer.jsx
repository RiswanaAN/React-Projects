import React from 'react'
import { TfiControlShuffle } from "react-icons/tfi";


function PlayContainer(props) {
  return (
    <div className="playContainer">
        <p>{props.counter}</p>
        <img src={props.currentSong.icon} className="imageIcon1"></img>
        <h3>~{props.currentSong.name}~</h3>
        <p>{props.currentSong.singer}</p>
        <div className="icon">
          <audio controls src={props.currentSong.song} autoPlay/>

          <button className="shuffleIcon" onClick={props.shuffleSong}>
            <TfiControlShuffle />
          </button>
        </div>
      </div> 
  )
}

export default PlayContainer