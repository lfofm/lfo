import PropTypes from 'prop-types';
import React from 'react';

const Navigation = ({ currentUserKey, children }) => (
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
        <a className="nav-item nav-link" href="/">Feed</a>
        <a className="nav-item nav-link" href="/collection">Collection</a>
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

        {currentUserKey ? ([
          <li className="nav-item" key='messages'>
            <a className="nav-link" data-toggle="modal" href="#msgModal">Messages</a>
          </li>,
          <li className="nav-item" key='logout'>
            <a className="nav-link" href="/users/sign_out">Logout</a>
          </li>,
          <li className="nav-item ml-2" key='avatar'>
            <button className="btn btn-default navbar-btn navbar-btn-avatar" data-toggle="popover">
              <img className="rounded-circle" src="https://placehold.it/50x50" />
            </button>
          </li>
        ]) : ([
          <li className="nav-item" key='signUp'>
            <a className="nav-link" href="/users/sign_up">Sign up</a>
          </li>,
          <li className="nav-item" key='login'>
            <a className="nav-link" href="/users/sign_in">Login</a>
          </li>
        ])}
      </ul>
    </div>
  </nav>
)

export default Navigation
