import React from 'react';
import './classs.css'

function VideoLayout() {
  // Sample video IDs from YouTube. Replace with your own video IDs.
  const videosSet1 = ['', '', '', '', ''];
  const videosSet2 = ['', '', '', '', ''];

  return (
    <div className="main-container">
      {/* First set of videos */}
      <div className="video-section">
       <h1 style={{color:"#0B7077"}}>Most Engaging CAT & Other MBA <br /> Entrance Classes at all time.</h1>
        <div className="video-grid">
          {videosSet1.map((id, index) => (
            <div className="video-wrapper" key={index}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={``} 
              >
                
              </iframe>
              
            </div>
          ))}
        </div>
      </div>

      {/* Second set of videos */}
      <div className="video-section">
        <div className="video-grid">
          {videosSet2.map((id, index) => (
            <div className="video-wrapper" key={index}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default VideoLayout;
