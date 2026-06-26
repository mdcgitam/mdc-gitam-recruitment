import React from 'react';
import { Mail, Github, Linkedin, Instagram, Twitter, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo text-gradient">MDC</h3>
                        <p className="footer-desc">
                            Meta Developer Communities. Building the future, one line of code at a time.
                        </p>
                    </div>
                    <div>
                        <h4>
                            Quick links
                        </h4>
                        <div className='quicklinks'>
                            <p><a href="#about">About</a></p>
                            <p><a href='#why-join'>Why Join</a></p>
                            <p><a href='#domains'>Domains</a></p>
                            <p><a href='#process'>Process</a></p>
                            <p>
                                <a href='#domains'>Apply Now</a>
                            </p>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <a href="mailto:mdc_vsp@gitam.in" className="contact-link">
                            <Mail size={18} /> mdc_vsp@gitam.in
                        </a>
                        <div className="footer-socials">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/company/meta-developer-communities/posts/?feedView=all" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.instagram.com/mdc_gitam/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="View our Official Site">
                            <h4>View our Official Site</h4>
                            <a href="https://mdcgitam.in/" className="contact-link" target="_blank" rel="noopener noreferrer">
                                <Globe size={18} /> mdcgitam.in
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Meta Developer Communities. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
