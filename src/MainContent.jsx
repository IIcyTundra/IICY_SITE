import 'xp.css/dist/98.css';
import './index.css'
function MainContent() {
  return (
    <div className='main-content'>
      <div style={{ width: 300}} className="window">
          <div className="title-bar">
            <div className="title-bar-text">Song of the Week</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <p style={{ textAlign: "center" }}>Cool Edge (Night) - Sonic Unleashed</p>
            <div className="field-row" style={{ justifyContent: "center" }}></div>
              <iframe width='200' height="200" src="https://www.youtube.com/embed/BeN4qOsY7Ag?si=yGrQCPeL776vmIAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>

      <div style={{ width: 300}} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Say Hello!</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">
          <iframe src="https://www3.cbox.ws/box/?boxid=3544849&boxtag=5zoKDh" width="100%" height="250" allowtransparency="yes" allow="autoplay" frameborder="0" margiheight="0" marginwidth="0" scrolling="auto"></iframe>
        </div>
      </div>
      <div style={{ width:300}} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Test!</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">
        </div>
      </div>
    </div>
  );
}

export default MainContent;