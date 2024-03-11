import React from 'react';

const VideoOverlay = ({ userName, isVideoOn }) => {
  return (
    <div className="video-overlay" style={{ display: isVideoOn ? 'none' : 'flex' }}>
      <p className="user-name">{userName}</p>
    </div>
  );
};

export default VideoOverlay;
