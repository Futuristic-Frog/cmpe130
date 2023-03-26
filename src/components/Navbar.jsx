import React, { Component } from 'react'
import './component.css';

export default class navbar extends Component {
  render() {
    return (
        <>
            <div className='navbar'>
                <h1>Wiliamson</h1>
                <a href="#home">Home</a>
                <a href="#login">Log In</a>
                <a href="#communityShowcase">Community Showcase</a>
                <a href="#events">Events</a>
                <a href="#bulletinBoard">Bulletin Board</a>
                <a href="#faq">FAQ</a>
            </div>
        </>
    )
  }
}
