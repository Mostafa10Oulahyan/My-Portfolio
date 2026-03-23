import TextType from './TextType';

const ProfilePage = ({ onContactMe }) => {
    return (
        <div className="profile-page">
            <img src="assets/a.png" alt="Mostafa Oulahyan" />
            <h1>Mostafa Oulahyan</h1>
            <TextType
                as="h3"
                text={[
                    "Full-Stack Web Developer",
                    "Custom Software Solutions",
                    "From Idea to Production"
                ]}
                typingSpeed={75}
                deletingSpeed={50}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
            />

            <div className="social-media">
                <a href="https://github.com/Mostafa10Oulahyan" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.instagram.com/mostapha_oulahyan/" target="_blank" rel="noreferrer">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/mostafa-oulahyan-6220b435a/" target="_blank" rel="noreferrer">
                    <i className="bx bxl-linkedin-square"></i>
                </a>
            </div>

            <p>
                I am currently a Digital Development student at ISTA NTIC Tangier
                (OFPPT), passionate about creating modern, high-performance web
                applications. I have a versatile Full Stack Developer profile with
                strong skills across both front-end and back-end technologies
            </p>

            <div className="btn-box">
                <a href="/resume/Mostafa_Oulahyan_EV.pdf" download="Mostafa_Oulahyan.pdf" className="btn">
                    Download CV
                </a>
                <a href="#" className="btn contact-me" onClick={(e) => { e.preventDefault(); onContactMe(); }}>
                    Contact Me!
                </a>
                
            </div>
        </div>
    );
};

export default ProfilePage;
