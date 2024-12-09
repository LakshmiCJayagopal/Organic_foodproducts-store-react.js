import React from 'react';
import "./about.css";

const About = () => {
  return (
 
 <div className="about-container">
            <div className="hero-section">
                <h1>About Us</h1>
                <p>Learn more about our mission and values</p>
            </div>
            <div className="content-section">
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>We aim to provide the best services...</p>
                </div>
                <div className="content">
                    <h2>Our Values</h2>
                    <p>Integrity, Excellence, and Innovation...</p>
                </div>
                <div className="content">
                    <h2>Our Team</h2>
                    <p>Meet the people behind the success...</p>
                </div>
            </div>
            <div className="footer">
                <p> &copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
 
  )
}

export default About;