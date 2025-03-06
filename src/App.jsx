import { useState } from 'react'
import './assets/css_files/CRT.css'
import 'xp.css/dist/98.css';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='crt'>
        <div className='backdrop'>
            <h2>
                iicytundra
            </h2>
            <p>
              Web and Game Developer.
              <br></br>
              Master of None, Do-er of all.
            </p>
          <div style={{ width: 300 }} className="window">
            <div className="title-bar">
              <div className="title-bar-text">Song of the Day</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize" />
                  <button aria-label="Maximize" />
                  <button aria-label="Close" />
                </div>
            </div>

            <div className="window-body">
              <p style={{ textAlign: "center",}}>femtanyl - WEIGHTLESS! </p>
              <div className="field-row" style={{ justifyContent: "center" }}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/I1SNuS67Pb4?si=Jng1xf_A8aSwfAYD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className='backdropstampsleft'>
          <img className='flip-horizontally' src='./src/assets/gifs/stamps/d84.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/d11.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/d55.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/silly.png' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/7475b9ff.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/e20.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/eatingchaps.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/j13.png' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/e108.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/d98.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/f61.gif' alt="Stamp GIF"></img>
          <img className='flip-horizontally' src='./src/assets/gifs/stamps/d84.gif' alt="Stamp GIF"></img>
        </div>

        <div className='backdropstampsright'>
          <img src='./src/assets/gifs/stamps/d84.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/ena_stamp_by_nzmk99_dg0b29c-fullview.png' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/lost.png' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/tumblr_inline_q0xu79gM8d1vefsve_500.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/tumblr_inline_rbs8gg7gAM1vefsve_500.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/tumblr_inline_rbjp57dSsm1vefsve_500.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/tumblr_psl8dlxy1F1xzybrpo8_100.png' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/d9l923y-c82e00f0-43cc-4b27-bd9c-e0e6a1853da0.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/e108.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/d98.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/f61.gif' alt="Stamp GIF"></img>
          <img src='./src/assets/gifs/stamps/d84.gif' alt="Stamp GIF"></img>
        </div>


      </div>
    </>
  )
}

export default App
