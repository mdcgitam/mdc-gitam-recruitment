import React, { useState } from 'react';
import { ExternalLink, Code2, Palette, Megaphone } from 'lucide-react';
import './DomainsSection.css';

const domainsData = {
    Technical: [
        {
            title: "WebArcs",
            desc: "Learn to build responsive websites and web applications.",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            formUrl: "https://docs.google.com/forms/d/placeholder-web"
        },
        {
            title: "DataVerse",
            desc: "Explore basics of data analysis and machine learning.",
            skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
            formUrl: "https://docs.google.com/forms/d/placeholder-ai"
        },
        {
            title: "Competitive Programming",
            desc: "Improve problem-solving and coding skills through practice.",
            skills: ["C++", "Java", "Python", "DSA"],
            formUrl: "https://docs.google.com/forms/d/placeholder-cp"
        }
    ],
    Creative: [
        {
            title: "Design",
            desc: "Create user-friendly designs and interfaces.",
            skills: ["Figma", "UI Design", "Canva"],
            formUrl: "https://docs.google.com/forms/d/placeholder-design"
        },
        {
            title: "Content",
            desc: "Write and manage content for social media and events.",
            skills: ["Content Writing", "Copywriting", "Branding"],
            formUrl: "https://docs.google.com/forms/d/placeholder-content"
        },
        {
            title: "Public Relations",
            desc: "Handle communication, outreach, and public engagement.",
            skills: ["Communication", "Event Promotion", "Networking"],
            formUrl: "https://docs.google.com/forms/d/placeholder-pr"
        },
        {
            title: "Photography",
            desc: "Capture and edit photos for events and promotions.",
            skills: ["Photography", "Editing", "Video Editing"],
            formUrl: "https://docs.google.com/forms/d/placeholder-photo"
        }
    ],
};

const categoryIcons = {
    Technical: <Code2 size={20} />,
    Creative: <Palette size={20} />,
    Management: <Megaphone size={20} />
};

const DomainsSection = () => {
    const [activeTab, setActiveTab] = useState('Technical');

    return (
        <section id="domains" className="section domains-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Recruitment Domains</h2>
                <p className="section-subtitle">Select a domain based on your interest.</p>

                <div className="domain-tabs">
                    {Object.keys(domainsData).map((category) => (
                        <button
                            key={category}
                            className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            <span className="tab-icon">{categoryIcons[category]}</span>
                            {category}
                        </button>
                    ))}
                </div>

                <div className={`domains-grid ${activeTab === 'Creative' ? 'creative-grid' : ''}`}>
                    {domainsData[activeTab].map((domain, index) => (
                        <div className="domain-card glass-panel" key={index}>
                            <div className="domain-content">
                                <h3 className="domain-title">{domain.title}</h3>
                                <p className="domain-desc">{domain.desc}</p>

                                <div className="skills-container">
                                    <span className="skills-label">Skills you’ll work on:</span>
                                    <div className="skills-tags">
                                        {domain.skills.map((skill, i) => (
                                            <span className="skill-tag" key={i}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="domain-footer">
                                <a
                                    href={domain.formUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary apply-btn"
                                >
                                    Apply <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DomainsSection;