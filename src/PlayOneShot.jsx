import React, { useEffect } from 'react';

const PlayOneShot = () => {
  useEffect(() => {
    const audio = new Audio('./assets/audiofiles/windows95.mp3');
    audio.play();
  }, []);

};

export default PlayOneShot;