import React, { useEffect, useRef } from 'react';
import '../assets/styles/index.css';
import Button from './Button';
import PropTypes from 'prop-types';

function Banner({ title, text, background, isVideo }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isVideo) {
      const video = videoRef.current;
      const checkTime = () => {
        if (video.currentTime >= 30) {
          video.currentTime = 0;
        }
      };
      video.addEventListener('timeupdate', checkTime);
      return () => {
        video.removeEventListener('timeupdate', checkTime);
      };
    }
  }, [isVideo]);

  return (
    <div className="banner">
      {isVideo ? (
        <video ref={videoRef} autoPlay muted loop>
          <source src={background} type="video/mp4" />
        </video>
      ) : (
        <div style={{backgroundImage: `url(${background})`}} />
      )}
      <h2>{title}</h2>
      <p>{text}</p>
      <Button text="Login" type="primary" />
      <Button text="See more" type="secondary" />
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  isVideo: PropTypes.bool,
};

Banner.defaultProps = {
  isVideo: false,
};

export default Banner;