import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Deepanshu</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/i.am.deepanshu/" className="home__social-icon" target="_blank">
                <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/sharma-deepanshu7060" className="home__social-icon" target="_blank">
                <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/deepanshu-sharmaa" className="home__social-icon" target="_blank">
                <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Deepanshu Sharma. All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer