import React, { useState } from 'react';
import { ExternalLink, Code2, Palette, Megaphone } from 'lucide-react';
import './DomainsSection.css';

const OPEN_RECRUITMENT_FORM_WebArc = 'https://forms.gle/YAKH6VA3Nt834Jpr7';
const OPEN_RECRUITMENT_FORM_CP = 'https://forms.gle/5S2tXJ4rCB2awHUE7';
const OPEN_RECRUITMENT_FORM_Design = 'https://forms.gle/FNMezw1qLPdfpKjs7';
const OPEN_RECRUITMENT_FORM_Content = 'https://forms.gle/YtmCVFHbW5CyL1oz8';
const OPEN_RECRUITMENT_FORM_Photography = 'https://forms.gle/fSt6kqDyK6jjuD7DA';
const OPEN_RECRUITMENT_FORM_PR = 'https://forms.gle/N4PEwWsZffPRuiVc9';

const domainsData = {
    Technical: [
        {
            title: "WebArc",
            desc: "Learn to build responsive websites and web applications.",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            formUrl: OPEN_RECRUITMENT_FORM_WebArc,
            descp: "Interested in exploring how modern websites are built? Get hands-on exposure to HTML, CSS, JavaScript, React, and responsive web development while contributing to real web-based projects."
        },
        // {
        //     title: "DataVerse",
        //     desc: "Explore basics of data analysis and machine learning.",
        //     skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
        //     formUrl: OPEN_RECRUITMENT_FORM,
        //     descp: "Interested in exploring the world of data? Work with data cleaning, visualization tools, OpenCV, Scikit-learn, and model building while gaining hands-on experience through a real-world project."
        // },

        {
            title: "Competitive Programming",
            desc: "Improve problem-solving and coding skills through practice.",
            skills: ["C++", "Java", "Python", "DSA"],
            formUrl: OPEN_RECRUITMENT_FORM_CP,
            descp: "Want to become a better problem solver? Learn different approaches to solving coding problems, optimize your solutions, strengthen your logical thinking for coding interviews and contests."
        }
    ],
    Creative: [
        {
            title: "Design",
            desc: "Create user-friendly designs and interfaces.",
            skills: ["Figma", "UI Design", "Canva"],
            formUrl: OPEN_RECRUITMENT_FORM_Design,
            descp: "Bring ideas to life through visuals. Design posters, certificates and social media creatives using tools like Canva, Figma and other design platforms."
        },
        {
            title: "Content",
            desc: "Write and manage content for social media and events.",
            skills: ["Content Writing", "Copywriting", "Branding"],
            formUrl: OPEN_RECRUITMENT_FORM_Content,
            descp: "Have a flair for writing and communication? Create emails, reports, social media content, and event communications for platforms like Instagram, WhatsApp, and LinkedIn while sharpening your content creation skills."
        },
        {
            title: "Public Relations",
            desc: "Handle communication, outreach, and public engagement.",
            skills: ["Communication", "Event Promotion", "Networking"],
            formUrl: OPEN_RECRUITMENT_FORM_PR,
            descp: "Be the voice of MDC. Manage our presence across Instagram, LinkedIn, and WhatsApp, promote events through online and offline outreach, and build meaningful connections with students across the campus."
        },
        {
            title: "Photography",
            desc: "Capture and edit photos for events and promotions.",
            skills: ["Photography", "Editing", "Video Editing"],
            formUrl: OPEN_RECRUITMENT_FORM_Photography,
            descp: "Capture moments that tell a story. Explore event photography, videography, and editing while documenting MDC's journey through creative visuals and engaging videos."
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
                                <p className="domain-desc">{domain.descp}</p>

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
                                    rel="noreferrer"
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
