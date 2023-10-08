/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-800 text-neutral-content">
  <nav>
    <header className="footer-title text-lg font-semibold text-white">Services</header> 
    <a className="link link-hover">Event Planning and Coordination</a>
    <a className="link link-hover">Decor and Floral Arrangements </a>
    <a className="link link-hover">Event Photography and Videography</a>
    <a className="link link-hover">Catering and Menu Planning</a>
  </nav> 
  <nav>
    <header className="footer-title text-lg  font-semibold text-white">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  
   
  </nav> 
  <nav>
    <header className="footer-title text-lg  font-semibold text-white">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;