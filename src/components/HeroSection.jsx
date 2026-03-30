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
                    <div className="badge delay-1 marquee-container">
                        <span className="badge-dot"></span>
                        <marquee
                            scrollAmount="6"
                            direction="left"
                            behavior="scroll"
                            className="hero-marquee"
                            >
                            Recruitment are open for the Academic year 26-27
                        </marquee>
                    </div>

                    <h1 className="hero-title delay-2">
                        <span className="hero-title">Meta Developer Communities</span>
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
                </div>
            </div>
        </section>
    );
};

export default HeroSection;