import React from 'react'
import { useState, useEffect } from "react";
import { Leo, Jawan, Dunki, Kok, Kesariya } from "../music/music.jsx";
import {
  Leoimage,
  Jawanimage,
  Dunkiimage,
  Kokimage,
  Kesariyaimage,
} from "../picture/picture.jsx";
import "./musicApp.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MusicContainer from "./MusicContainer.jsx";
import PlayContainer from "./PlayContainer.jsx";
import { useNavigate } from 'react-router-dom';
import GoogleLogout from '../authentication/GoogleSignout.jsx';
import GoogleSignout from '../authentication/GoogleSignout.jsx';


function MusicPlayer() {
    const [counter, setCounter] = useState();
  const [musics, setMusics] = useState([
    {
      id: 1,
      name: "Nan Ready thaan",
      song: Leo,
      icon: Leoimage,
      singer: "Anirudh Ravichander",
    },
    {
      id: 2,
      name: "Chaleya Teri Oar",
      song: Jawan,
      icon: Jawanimage,
      singer: "Arijit Singh",
    },
    {
      id: 3,
      name: "Oh Main Toh Lutt Putt Gaya",
      song: Dunki,
      icon: Dunkiimage,
      singer: "Arijit Singh",
    },
    {
      id: 4,
      name: "Asura nee ravana",
      song: Kok,
      icon: Kokimage,
      singer: "Benny Dayal",
    },
    {
      id: 5,
      name: "Kesariya thera ishqhe",
      song: Kesariya,
      icon: Kesariyaimage,
      singer: "Sonu Nigam",
    },
  ]);

  const [currentSong, setCurrentSong] = useState({
    id: 5,
    name: "Kesariya thera ishqhe",
    song: Kesariya,
    icon: Kesariyaimage,
    singer: "Sonu Nigam",
  });
  const [shuffle, setShuffle] = useState(true);
  const toastPopup = () => {
    toast("playing next track!", {
      position: "top-right",
      autoClose: 4000,

      style: {
        backgroundColor: "darkblue",
        color: "white",
        fontSize: "20px",
        width: "34vw",
        padding: "30px 20px",
      },
    });
  };
  const navigate= useNavigate()
  //this function is to play music, when click the button
  function playMusic(id) {
    const playSong = musics.find((music) => music.id == id);
    setCurrentSong(playSong);
  }
  let arr = [];
  function shuffleSong() {
    setShuffle(false);
    let ranId = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    console.log(ranId);
    if (arr.length == musics.length) {
      arr = [];
      shuffleSong();
    } else {
      if (!arr.includes(ranId)) {
        arr.push(ranId);
        console.log(arr);
        playMusic(ranId);
        toastPopup();
        async function printNumber(timer) {
          await new Promise((resolve) => {
            setTimeout(() => {
              if (timer == 5) {
                shuffleSong();
              } else {
                resolve(setCounter(timer));
              }
            }, 1000);
          });
        }

        async function loop() {
          for (let i = 1; i <= 5; i++) {
            await printNumber(i);
          }
        }
        async function repeat() {
          for (let j = 1; j <= Infinity; j++) {
            await loop();
          }
        }
        repeat();
      } else {
        shuffleSong();
      }
    }
  }
  function logoutUser(){
    navigate('/');
  }
  //taking login user details from ls when login with google
  let googleUserDetails= window.localStorage.getItem("userDetailGoogle");
  let googleUserDetail=JSON.parse(googleUserDetails);
  
  return (
    <div className="musicMainContainer">
      <div className='navBar'>
        <div className= "profileDiv">
          <img src= {googleUserDetail.picture} className="profilePicture"></img>
          <p className="profileName">{googleUserDetail.name}</p>
        </div> 
        <h1>Music Playlist</h1>
        <button className='logoutButton' onClick={logoutUser}>Logout</button>
         {/* <GoogleSignout /> */}
      </div>
      <div className="headingContainer">
  
        <ToastContainer />
        
      </div>

      <PlayContainer
        counter={counter}
        currentSong={currentSong}
        shuffleSong={shuffleSong}
      />
      <MusicContainer 
        musics={musics} 
        playMusic={playMusic} />
    </div>
  );
}

export default MusicPlayer