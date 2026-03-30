import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Why Join', href: '#why-join' },
        { name: 'Domains', href: '#domains' },
        { name: 'Process', href: '#process' },
    ];

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    <span className="text-gradient">MDC</span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <a href="#domains" className="btn btn-primary nav-btn">Apply Now</a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name} onClick={() => setIsMobileMenuOpen(false)}>
                            <a href={link.href} className="mobile-nav-link">{link.name}</a>
                        </li>
                    ))}
                    <li onClick={() => setIsMobileMenuOpen(false)}>
                        <a href="#domains" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Apply Now</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
