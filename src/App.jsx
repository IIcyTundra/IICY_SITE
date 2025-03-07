import { useState } from 'react'
import React, { useEffect } from 'react';
import './assets/css_files/CRT.css'
import 'xp.css/dist/98.css';
import './index.css'

function App() {
  const [visitCount, setVisitCount] = useState(0);
  const PlayOneShot = () => {
    useEffect(() => {
      const audio = new Audio('./src/assets/audiofiles/windows98.mp3');
      audio.volume = 0.1; // Set the volume (0.0 to 1.0)
      audio.play();
    }, []);

  };
  const VisitorCounter = () => {
    useEffect(() => {
      // Get the current count from localStorage
      const count = localStorage.getItem('visitCount') || 0;
      const newCount = parseInt(count) + 1;

      // Update localStorage and state
      localStorage.setItem('visitCount', newCount);
      setVisitCount(newCount);
    }, []);
  };

  return (
    <>
      {/* <PlayOneShot /> */}
      <div className='backdrop crt'>
        <div>
          <h2>IIcyTundra</h2>
          <h4>Front-End Developer, Indie Game Developer</h4>
        </div>

        <div style={{ marginTop: 52, justifyContent: 'center' }}>
          <div class="window" >
            <div class="title-bar">
              <div class="title-bar-text">EN1GM4_Dev_0.5</div>
              <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div class="window-body">
              <pre>
                <div class='terminaltext typewriter'>ION&#10094;<img style={{width: 10, height: 10}} src='./src/assets/images/Marathon_Logo.png' alt="Stamp GIF"></img>&#10095; BLAM_DOS
                <br></br>
                &#10094;C&#10095; Copyright ION Corp 30XX-3XXX.
                <br></br>
                user_{visitCount}@EN1GM4NETWORK~$ Welcome to my website! This is where I primarily post my projects and other things I'm working on.
                <br></br>
                </div>
              </pre>
            </div>
          </div>

          <div style={{ width: 300, marginRight: 20 }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">Song of the Week</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>

            <div className="window-body">
              <p style={{ textAlign: "center" }}>Lone - Tyler the Creator</p>
              <div className="field-row" style={{ justifyContent: "center" }}></div>
                <iframe width="280" height="200" src="https://www.youtube.com/embed/QICNyBMod6M?si=quZNsEO0A7CW-MNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">About Me</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div className="window-body">

            </div>
          </div>

          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Stamps!</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div className="window-body">
              <img className='flip-horizontally' src='./src/assets/gifs/stamps/d84.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/ena_stamp_by_nzmk99_dg0b29c-fullview.png' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/lost.png' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/tumblr_inline_q0xu79gM8d1vefsve_500.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/tumblr_inline_rbs8gg7gAM1vefsve_500.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/tumblr_inline_rbjp57dSsm1vefsve_500.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/tumblr_psl8dlxy1F1xzybrpo8_100.png' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/d9l923y-c82e00f0-43cc-4b27-bd9c-e0e6a1853da0.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/e108.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/d84.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/d98.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/f61.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/d55.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/silly.png' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/7475b9ff.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/gifs/stamps/eatingchaps.gif' alt="Stamp GIF"></img>
              <img src='./src/assets/images/j13.png' alt="Stamp GIF"></img>
            </div>
          </div>

        </div>

      <div style={{ position: 'fixed', bottom: 0, right: 0 }}>
        <img src='./src/assets/gifs/lain.gif' alt="Stamp GIF"></img>
      </div>
    </>
  )
}

export default App
