import React from 'react'
import { socialLinks, pageLinks } from '../data';

const Footer = () => {

  const pageLink = pageLinks.map((pageLink) => {
    const { id, href, text} = pageLink;
    return (
      <li key={id}>
        <a href={href} className="footer-link">
          {text}
        </a>
      </li>
    );
  })

const socialLink = socialLinks.map((socialLink) => {
  const { id, href, icon} = socialLink;
  return (
    <>
      <li key={id}>
        <a
          href={href}
          target="_blank"
          className="footer-icon"
        >
          <i className={icon}></i>
        </a>
      </li>
    </>
  );
})

  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLink}
        </ul>
        <ul className="footer-icons">
          {socialLink}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer
