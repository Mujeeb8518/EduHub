import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'; 
import './Home.css';

const Home = () => {
    const header = (
        <div className="header">
            <h2>Eduhub</h2>
        </div>
    );

    const footer = (
        <div className="footer">
            <Link to="/register">
                <Button label="Register Now" className="p-button-text" />
            </Link>
        </div>
    );

    return (
        <div className="home-container">
            <div className="card-container">
                <Card title={header} footer={footer} className="home-card">
                    <div className="description">
                        <p>
                            EduHub is a dynamic educational platform catering to students and professors, offering a collaborative space for knowledge exchange. It operates as an extensive question and answer system, allowing students to pose academic, programming, or tech-related inquiries, while professors contribute detailed responses, share educational materials, and participate in discussions.
                        </p>
                        <p>
                            Drawing inspiration from platforms like Stack Overflow and Reddit, EduHub is envisioned as a community-driven knowledge-sharing hub tailored for educational purposes. Users, including students and professors, can actively engage in discussions, seek and provide answers, and collectively enrich the learning experience. The platform utilizes popular features such as upvoting for the most popular questions and answers, fostering community interaction and recognizing valuable contributions.
                        </p>
                        <p>
                            As a current plan, EduHub emphasizes reliability, security, and user-friendly design for its deployment deliverable. It ensures continuous access to educational resources while maintaining a secure online environment. Future plans may include expanding functionality to further enhance the platform's capabilities, with the aim of providing an even more comprehensive educational experience.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Home;
