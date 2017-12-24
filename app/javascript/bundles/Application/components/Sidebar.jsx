import PropTypes from 'prop-types';
import React from 'react';

const testImage = "https://img.discogs.com/MTfhjnsMIDjNw1ZWgcopw5nr8kY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1544216-1356019971-5419.png.jpg"

const Player = () => (
  <div>
    <img className='track-image mb-2' src={testImage} />
  </div>
)

const Navigation = ({ currentUserKey, children }) => (
  <div>
    <h4>Now Playing</h4>
    <Player />
  </div>
)

export default Navigation
