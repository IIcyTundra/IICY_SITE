
import { exp } from "three/tsl";
import TypeIt from "typeit-react";
import VisitorCounter from './VisitorCounter';
import 'xp.css/dist/98.css';


function CommandPrompt()
{
  return (
    <div className='window-content' style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">EN1GM4_Dev_0.5</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body" >
          <div className="CMD-Background terminaltext">
            <TypeIt options={{ speed: 10, waitUntilVisible: true }}>
              ION&#10094;<img className='title' style={{ width: "15px", height: "15px" }} src='./images/Marathon_Logo.png' alt="Stamp GIF" />&#10095; BLAM_DOS
              <br />
              &#10094;C&#10095; Copyright ION Corp 30XX-3XXX.
              <br />
             <em style={{ overflowWrap: 'break-word'}}>User<VisitorCounter />@EN1GM4-NETWORK~$ Welcome to my website! This is where I primarily post my projects and other things I'm working on.</em>
             <br />
             <em style={{ overflowWrap: 'break-word'}}>~$ This site is currently under construction, so please excuse the mess (つ﹏⊂)</em>
             <br />
             <em style={{ overflowWrap: 'break-word'}}>~$ Otherwise please enjoy your stay!</em>
            </TypeIt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandPrompt;