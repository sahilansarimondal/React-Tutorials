import React from 'react'
import logo from "../images/logo.svg"
import { pageLinks } from "../data";
import { socialLinks } from "../data";


const Navbar = () => {
const link = pageLinks.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.href} className="nav-link">
        {link.text}
      </a>
    </li>
  );
});

const socialLink = socialLinks.map((socialLink) => {
    const { id, href, icon } = socialLink;
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
          <i className={icon}></i>
        </a>
      </li>
    );
})

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {link}
          </ul>

          <ul className="nav-icons">
            {socialLink}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar
