import React from 'react';
import { ChevronRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in-up">
                    <div className="badge delay-1">
                        <span className="badge-dot"></span>
                        <span>Pocket Recruitments open for Academic Year 2026-27</span>
                    </div>

                    <h1 className="hero-title delay-2">
                        <span>Meta Developer Communities</span>
                    </h1>

                    <p className="hero-subtitle delay-3">
                        A student-led tech club for learning, building projects
                        and growing together.
                    </p>

                    <div className="hero-actions delay-3">
                        <a href="#domains" className="btn btn-primary hero-btn">
                            Apply Now <ChevronRight size={20} />
                        </a>
                    </div>

                    <div className="hero-spotlight delay-4">
                        <p className="spotlight-label">Pocket Recruitment Window</p>
                        <div className="spotlight-grid">
                            <div className="spotlight-item">
                                <span className="spotlight-key">Open For</span>
                                <p className="spotlight-value">All years are welcome to apply</p>
                            </div>
                            <div className="spotlight-item">
                                <span className="spotlight-key">Deadline</span>
                                <p className="spotlight-value">27th August 2026, 11:59:59 PM </p>
                            </div>
                            <div className="spotlight-item spotlight-note">
                                <span className="spotlight-key">Heads Up</span>
                                <p className="spotlight-value">Recruitment procedure starts after examinations , so no worries in Applying 😉</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;