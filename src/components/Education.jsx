import { memo } from 'react';

const Education = memo(function Education() {
    return (
        <>
            <h1 className="title">Education</h1>

            <div className="workeduc-box">
                <div className="workeduc-content">
                    <span className="year">
                        <i className="bx bxs-calendar"></i>2023 - 2024
                    </span>
                    <h3>High School</h3>
                    <p>
                        Physical and Chemical Sciences option from Lycée Elbassatine
                        in June 2024, providing me with a strong foundational
                        knowledge in scientific and methodological disciplines
                        necessary for digital development.
                    </p>
                </div>

                <div className="workeduc-content">
                    <span className="year">
                        <i className="bx bxs-calendar"></i>2024 - 2026
                    </span>
                    <h3>ISTA NTIC</h3>
                    <p>
                        Currently pursuing a Diploma in Digital Development at ISTA
                        NTIC Tangier (OFPPT), where I am acquiring comprehensive
                        skills in web development, programming, and digital
                        technologies
                    </p>
                </div>
            </div>
        </>
    );
});

export default Education;

