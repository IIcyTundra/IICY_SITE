import { useState } from 'react'
import React, { useEffect } from 'react';
import Title from './Title' // Import VisitorCounter component
import CommandPrompt from './CommandPrompt'
import MainContent from './MainContent'
import './assets/css_files/CRT.css'

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

  return (
    <>
      <PlayOneShot />
      <div>
        <div className='backdrop crt'>
          <Title />
          <CommandPrompt />
          <MainContent />
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
              <img className="stamps" src='./images/ena_stamp_by_nzmk99_dg0b29c-fullview.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/lost.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/tumblr_inline_q0xu79gM8d1vefsve_500.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/tumblr_inline_rbs8gg7gAM1vefsve_500.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/tumblr_inline_rbjp57dSsm1vefsve_500.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/tumblr_psl8dlxy1F1xzybrpo8_100.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/12.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/d9l923y-c82e00f0-43cc-4b27-bd9c-e0e6a1853da0.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/e108.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/d98.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/f61.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/d55.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/silly.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/7475b9ff.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/eatingchaps.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/j13.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/maka.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/sonic.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/sys_32.webp' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/saturn.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/shizuku.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/emoticon.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/addict.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/anime_girl.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/danckity.gif' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/j8.png' alt="Stamp GIF"></img>
              <img className="stamps" src='./images/macabreVampireDA.png' alt="Stamp GIF"></img>
            </div>
          </div>

          </div>

        <div style={{ position: 'fixed', bottom: -3, right: -100}}>
          <img src='images/lain.gif' alt="Stamp GIF"></img>
        </div>
        {/* <div style={{ position: 'fixed', top: 0, right: 0 }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">BLAM.EXE</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div className="window-body">
              <button><img style={{ width: 300}}src='images/BLAM!.png' alt="Stamp GIF"></img></button>
            </div>
          </div> */}
      </div>
    </>
  )
}

export default App
