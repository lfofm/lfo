import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './Player.scss'

const testImage = "https://img.discogs.com/MTfhjnsMIDjNw1ZWgcopw5nr8kY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1544216-1356019971-5419.png.jpg"

const Player = () => (
  <div className={`container-fluid bg-primary text-white fixed-bottom player px-4`}>
    <div className='row py-2'>
      <div className="col-sm text-md-left flex flex-row">
        <div className='cover align-self-center'>
          <img className='align-middle' src={testImage} />
        </div>
        <div className='p-2 w-100 flex flex-column'>
          <span className='h5 align-self-start'>Complications</span>
          <span className='h6 font-weight-normal align-self-start'>deadmau5</span>
          <div className='align-self-end' style={{backgroundColor: 'grey', height: '10px', width: '100%'}}>
            <div className='py-0' style={{backgroundColor: 'white', height: '10px', width: '60%'}}></div>
          </div>
        </div>
      </div>
      <div className="col-sm-auto text-md-right">
        <div>
          <span className='h6'>
            <span className='font-weight-normal'>Playing</span> <a href="/">Best of Progressive House</a>
          </span> <br />
          <span className='h6'>04:00/07:54</span> <br />
          <span className='h6'>
            <span className="oi oi-media-step-backward pointer px-2"></span>
            <span className="oi oi-media-play pointer px-2"></span>
            <span className="oi oi-media-step-forward pointer px-2"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Player;
