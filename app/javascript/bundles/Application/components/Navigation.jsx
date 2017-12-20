import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ children }) => (
  <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary app-navbar">
  
    <a className="navbar-brand" href="/">
      LFO
    </a>
  
    <button
      className="navbar-toggler navbar-toggler-right d-md-none"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Feed <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/collections">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/radio">Radio</a>
        </li>
      </ul>
  
      <form className="form-inline float-right d-none d-md-flex">
        <input className="form-control" type="text" data-action="grow" placeholder="Search" />
      </form>
  
      <ul id="#js-popoverContent" className="nav navbar-nav float-right mr-0 d-none d-md-flex">
        <li className="nav-item">
          <a className="app-notifications nav-link" href="/notifications">
            <span className="icon icon-bell"></span>
          </a>
        </li>
  
        <li className="nav-item">
          <a className="nav-link" data-toggle="modal" href="#msgModal">Messages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/upload">Upload</a>
        </li>
  
        <li className="nav-item d-md-none">
          <a className="nav-link" href="notifications/index.html">Notifications</a>
        </li>
        <li className="nav-item d-md-none">
          <a className="nav-link" data-action="growl">Growl</a>
        </li>
        <li className="nav-item d-md-none">
          <a className="nav-link" href="login/index.html">Logout</a>
        </li>
  
  
        <li className="nav-item ml-2">
          <button className="btn btn-default navbar-btn navbar-btn-avatar" data-toggle="popover">
            <img className="rounded-circle" src="https://placehold.it/50x50" />
          </button>
        </li>
      </ul>
  
      <ul className="nav navbar-nav d-none" id="js-popoverContent">
        <li className="nav-item"><a className="nav-link" href="#" data-action="growl">Growl</a></li>
        <li className="nav-item"><a className="nav-link" href="login/index.html">Logout</a></li>
      </ul>
    </div>
  </nav>
)

export default Navigation
