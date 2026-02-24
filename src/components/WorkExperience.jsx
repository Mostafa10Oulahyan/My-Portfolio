import { memo } from 'react';

const WorkExperience = memo(function WorkExperience() {
    return (
        <>
            <h1 className="title">Work Experience</h1>

            <div className="workeduc-box">
                <strong>No work experiences yet</strong>
            </div>

            <h1 className="title" style={{ marginTop: '2rem' }}>Participations</h1>

            <div className="workeduc-box">
                <div className="workeduc-content">
                    <span className="year">
                        <i className="bx bxs-calendar"></i>2025
                    </span>
                    <h3>
                        Hackathon Participation – Tangier, World Cup 2030 Tourism Services
                    </h3>
                    <p>
                        I participated in the Tangier Hackathon on the theme of
                        "Services for the Public and Tourism in Preparation for the
                        2030 World Cup." Using our equipment, we developed an
                        innovative digital solution to enhance the visitor experience
                        through interactive services, personalized assistance, and
                        improved tourist guidance. This participation allowed me to
                        develop my problem-solving, equipment operation, user
                        experience/UI design, and functional prototyping skills within
                        a limited timeframe.
                    </p>
                </div>
            </div>
        </>
    );
});

export default WorkExperience;

