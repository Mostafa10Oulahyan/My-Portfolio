const ProjectsQuiz = () => {
    return (
        <>
            <h1 className="title">Project Quiz :</h1>

            <div className="portfolio-box">
                <div className="img-box">
                    <img src="assets/myquiz.png" alt="My Quiz Project" />
                </div>

                <div className="info-box">
                    <div className="info-title">
                        <h3>Project Name : My Quiz</h3>
                        <a href="https://mostafa10oulahyan.github.io/MyQuiz-Frontend/index.html" target="_blank" rel="noreferrer">
                            Live Preview <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                    <p><strong>Description : </strong>Quiz application with simple and interactive flow.</p>
                    <p>-Tech Used:</p>
                    <p>&nbsp;&nbsp;<strong>Front-End:</strong> Html5, Css3, JavaScript</p>
                    <p>&nbsp;&nbsp;<strong>Version Control:</strong> Git</p>
                </div>
            </div>
        </>
    );
};

export default ProjectsQuiz;
