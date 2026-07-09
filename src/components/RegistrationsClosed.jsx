import React from "react";
import { XCircle } from "lucide-react";
import "./RegistrationsClosed.css";

const RegistrationsClosed = () => {
    return (
        <div className="closed-container">
            <div className="closed-card">
                <XCircle size={70} className="closed-icon" />

                <h1>Registrations Closed</h1>

                <p>
                    Thank you for your interest in joining <strong>MDC GITAM</strong>.
                </p>

                <p>
                    The recruitment registrations have officially closed.
                </p>

                <p>
                    Stay connected with us for future recruitment drives and exciting
                    events.
                </p>

                <a href="/" className="back-btn">
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default RegistrationsClosed;
