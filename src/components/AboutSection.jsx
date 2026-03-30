import React from 'react';
import { Terminal, Users, Code, Cpu } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
    const activities = [
        { icon: <Terminal size={24} />, title: "Hackathons", desc: "Team-based coding events focused on problem solving." },
        { icon: <Users size={24} />, title: "Tech Talks", desc: "Sessions with seniors, alumni and professionals." },
        { icon: <Code size={24} />, title: "Workshops", desc: "Practical learning on web, programming and tools." },
        { icon: <Cpu size={24} />, title: "Projects", desc: "Building small projects and contributing together." }
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title text-gradient">About MDC</h2>
                <p className="section-subtitle">A student developer community</p>

                <div className="about-grid">
                    <div className="about-content glass-panel">
                        <h3>Learning and Growing Together</h3>
                        <p>
                            Meta Developer Communities (MDC) is a student-run tech club focused on learning,
                            collaboration and practical experience in development.
                        </p>
                        <p>
                            We welcome beginners and experienced students alike. MDC is a place to learn,
                            share knowledge, work on projects, and improve technical skills together.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-value text-gradient">40+</span>
                                <span className="stat-label">Members</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value text-gradient">20+</span>
                                <span className="stat-label">Events</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value text-gradient">7</span>
                                <span className="stat-label">Domains</span>
                            </div>
                        </div>
                    </div>

                    <div className="activities-grid">
                        {activities.map((item, index) => (
                            <div className="activity-card glass-panel" key={index}>
                                <div className="activity-icon-wrapper">
                                    {item.icon}
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;