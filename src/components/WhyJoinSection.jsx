import React from 'react';
import { Brain, Globe, Users, Briefcase } from 'lucide-react';
import './WhyJoinSection.css';

const WhyJoinSection = () => {
    const benefits = [
        {
            icon: <Brain size={32} />,
            title: "Learn New Skills",
            desc: "Improve your technical skills by learning tools and technologies used in real projects."
        },
        {
            icon: <Globe size={32} />,
            title: "Get Exposure",
            desc: "Attend events, interact with seniors and professionals, and learn how the tech industry works."
        },
        {
            icon: <Users size={32} />,
            title: "Work in Teams",
            desc: "Collaborate with other students, share ideas, and gain experience working in groups."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Build Your Portfolio",
            desc: "Work on projects that you can add to your resume, GitHub, or LinkedIn."
        }
    ];

    return (
        <section id="why-join" className="section why-join-section">
            <div className="container">
                <h2 className="section-title text-gradient">Why Join MDC?</h2>
                <p className="section-subtitle">Learn, collaborate, and grow as a developer.</p>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div className="benefit-card glass-panel group" key={index}>
                            <div className="benefit-icon-wrapper group-hover">
                                {benefit.icon}
                            </div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-desc">{benefit.desc}</p>

                            <div className="benefit-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoinSection;