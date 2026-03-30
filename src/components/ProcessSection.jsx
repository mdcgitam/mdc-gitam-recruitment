import React from 'react';
import { PencilLine, FileSearch, ClipboardList, Mic, Award } from 'lucide-react';
import './ProcessSection.css';

const ProcessSection = () => {
    const steps = [
        {
            id: 1,
            title: "Application Submission",
            desc: "Fill out the Google form for your chosen domain. Share your details, past experience (if any), and why you want to join.",
            icon: <PencilLine size={24} />,
            color: "#05349a" // Primary Blue
        },
        {
            id: 2,
            title: "Shortlisting",
            desc: "Our team will review your application. We look for passion, eagerness to learn, and alignment with our community values.",
            icon: <FileSearch size={24} />,
            color: "#05349a" // Dark Blue
        },
        {
            id: 3,
            title: "Task Submission",
            desc: "Shortlisted candidates will be given a small evaluation task depending on their chosen domain to showcase their skills.",
            icon: <ClipboardList size={24} />,
            color: "#05349a" // Vibrant Blue
        },
        {
            id: 4,
            title: "Interview",
            desc: "Candidates will face a brief casual interview to discuss their task, interests, and alignment with MDC.",
            icon: <Mic size={24} />,
            color: "#05349a" // Primary Blue
        },
        {
            id: 5,
            title: "Final Selection",
            desc: "Welcome to MDC! Selected candidates will receive an enthusiastic welcome email and an invite to our exclusive workspaces.",
            icon: <Award size={24} />,
            color: "#05349a" // Slightly darker blue
        }
    ];

    return (
        <section id="process" className="section process-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient">Recruitment Process</h2>
                <p className="section-subtitle">A transparent and straightforward journey to join our community.</p>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {steps.map((step, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={step.id}>
                            <div id='box' className="timeline-content glass-panel">
                                <div
                                    className="step-number"
                                    style={{ background: step.color, boxShadow: `0 0 20px ${step.color}66` }}
                                >
                                    {step.id}
                                </div>
                                <div className="step-icon-wrapper" style={{ color: step.color }}>
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
