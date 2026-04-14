const ProjectsHangout = () => {
    return (
        <>
            <h1 className="title">Project Hangout :</h1>

            <div className="portfolio-box">
                <div className="img-box">
                    <img src="assets/LandingPageHangount.png" alt="Landing Page Hangout Project" />
                </div>

                <div className="info-box">
                    <div className="info-title">
                        <h3>Project Name : Landing Page Hangout</h3>
                        <a href="https://hangout-tawny.vercel.app/" target="_blank" rel="noreferrer">
                            Live Preview <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                    <p><strong>Description : </strong>Responsive landing page for a Hangout concept.</p>
                    <p>-Tech Used:</p>
                    <p>&nbsp;&nbsp;<strong>Front-End:</strong> Html5, Css3, JavaScript</p>
                    <p>&nbsp;&nbsp;<strong>Version Control:</strong> Git</p>
                </div>
            </div>
        </>
    );
};

export default ProjectsHangout;
