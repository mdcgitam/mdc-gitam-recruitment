import React from 'react';
import { MessageCircle, Mail, Linkedin, Phone } from 'lucide-react';
import './WhatsAppSection.css';

import Akash from "../assets/Akash.png";
import Hasini from "../assets/Hasini.jpg";
import Tanuj from "../assets/Tanuj.jpeg";
import Srinivas from "../assets/Srinivas.jpg";
import Likhita from "../assets/Likhita.jpg";
import Tanishq from "../assets/Tanishq.jpeg";

const ebMembers = [
  {
    name: "Mohan Tanuj",
    role: "President",
    image: Tanuj,
    lin: "https://www.linkedin.com/in/vnr-Tanuj/",
    email: "mponasan@gitam.in",
    phone: "9347344965"
  },
  {
    name: "Hasini",
    role: "Vice President",
    image: Hasini,
    lin: "https://www.linkedin.com/in/hasini-dandu",
    email: "hdandu2@gitam.in",
    phone: "6305327994"
  },
  {
    name: "Tanishq",
    role: "Secretary",
    image: Tanishq,
    lin: "https://www.linkedin.com/in/tanishqkundrapu",
<<<<<<< HEAD
    email: "tkundrap@student.gitam.edu",
=======
    email: "sandavar@gitam.in",
>>>>>>> 81cee05 (Added the deadline)
    phone: "9652177526"
  },
  {
    name: "Srinivas",
    role: "Head of Operations",
    image: Srinivas,
    lin: "https://www.linkedin.com/in/srinivaskatragaddak",
<<<<<<< HEAD
    email: "skatrag1@student.gitam.edu",
=======
    email: "jpalla2@gitam.in",
>>>>>>> 81cee05 (Added the deadline)
    phone: "6302655976"
  },
  {
    name: "Akash Kishan",
    role: "Technical Head",
    image: Akash,
    lin: "http://www.linkedin.com/in/akashkishankarri",
    email: "akarri4@gitam.in",
    phone: "8374849797"
  },
  {
    name: "Likhita",
    role: "Creative Head",
    image: Likhita,
    lin: "https://www.linkedin.com/in/likhita-mannem/",
    email: "lmannem@student.gitam.edu",
    phone: "9849497687"
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 81cee05 (Added the deadline)
];

const duplicatedMembers = [...ebMembers, ...ebMembers];

const WhatsAppSection = () => {
  return (
    <section id="contact" className="section wa-section">
      <div className="container">

        <h2 className="section-title text-center text-gradient">
          Contact Us
        </h2>

        <p className="section-subtitle">
          Meet our Executive Board
        </p>

        <div className="carousel-wrapper">
          <div className="eb-carousel">
            <div className="eb-carousel-track">
              {duplicatedMembers.map((member, index) => (
                <div className="eb-card" key={index}>

                  <div className="eb-img-wrapper">
                    <img src={member.image} alt={member.name} />
                  </div>

                  <p className='ebname'>{member.name}</p>

                  <p className="eb-role text-gradient">
                    {member.role}
                  </p>

                  {/* ✅ FIXED ICON SECTION */}
                  <div className='iconbox'>

                    {member.email && (
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}>
                        <Mail className='icon' size={35} />
                      </a>
                    )}

                    {member.lin && (
                      <a href={member.lin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className='icon' size={35} />
                      </a>
                    )}

                    {member.phone && (
                      <a href={`tel:${member.phone}`}>
                        <Phone className='icon' size={35} />
                      </a>
                    )}

                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="wa-card glass-panel text-center mt-4">
          <div className="wa-icon-wrapper animate-float">
            <MessageCircle size={48} />
          </div>

          <h3 className="wa-title">
            Join our WhatsApp Group
          </h3>

          <p className="wa-desc">
            Get instant updates, ask questions and interact with the MDC core team.
          </p>

          <a
            href="https://chat.whatsapp.com/DoLaeuVK7jZ8Eq56eE0eIZ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary wa-btn"
          >
            <MessageCircle size={20} /> Join WhatsApp Group
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhatsAppSection;
