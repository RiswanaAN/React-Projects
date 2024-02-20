import React from 'react'

function MusicContainer(props) {
  return (
    <div>
        <div className="musicContainer">
        {props.musics.map((music) => (
          <div
            key={music.id}
            onClick={() => props.playMusic(music.id)}
            className="imageContainer"
          >
            <img src={music.icon} className="imageIcon"></img>
            <div className="songDetails">
              <h4>{music.name}</h4>
              <p>{music.singer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MusicContainer