import React from 'react';
import { MessageCircle, Mail, Linkedin, Phone } from 'lucide-react';
import './WhatsAppSection.css';

import ISHITA from '../assets/ISHITA.jpg';
import GAGAN from '../assets/GAGAN.jpg';
import NITISH from '../assets/NITISH.jpeg';
import NANDAN from '../assets/NANDAN.JPG';
import SRAVANI from '../assets/SRAVANI.jpg';
import SNEHAL from '../assets/SNEHAL.jpg';

const ebMembers = [
  {
    name: "Mohan Tanuj Ponasanapalli",
    role: "President",
    image: NITISH,
    lin: "https://www.linkedin.com/in/vnr-nitish/",
    email: "mponasan@gitam.in",
    phone: "9347344965"
  },
  {
    name: "Hasini Dandu",
    role: "hdandu2@gitam.in",
    image: GAGAN,
    lin: "https://www.linkedin.com/in/gaganrachakonda/",
    email: "grachako2@gitam.in",
    phone: "8978082388"
  },
  {
    name: "Ishita Gupta",
    role: "Technical Head",
    image: ISHITA,
    lin: "https://www.linkedin.com/in/ishitagupta0811/",
    email: "igupta@gitam.in",
    phone: "7205640451"
  },
  {
    name: "Sravani Kalisetty",
    role: "Creative Head",
    image: SRAVANI,
    lin: "https://www.linkedin.com/in/sravani-kalisetty-090730293/",
    email: "skaliset@gitam.in",
    phone: "8919424414"
  },
  {
    name: "Snehal Andavarapu",
    role: "Secretary",
    image: SNEHAL,
    lin: "https://www.linkedin.com/in/snehal-andavarapu-83b3b5293/",
    email: "sandavar@gitam.in",
    phone: "8917562924"
  },
  {
    name: "Jothisk Nandan Palla",
    role: "Head of Operations",
    image: NANDAN,
    lin: "https://www.linkedin.com/in/palla-jothisk-nandan/",
    email: "jpalla2@gitam.in",
    phone: "6304110542"
  }
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
                      <a  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}>
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
