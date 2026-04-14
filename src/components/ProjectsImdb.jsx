const ProjectsImdb = () => {
    return (
        <>
            <h1 className="title">Project IMDb :</h1>

            <div className="portfolio-box">
                <div className="img-box">
                    <img src="assets/imdb.png" alt="IMDb Project" />
                </div>

                <div className="info-box">
                    <div className="info-title">
                        <h3>Project Name : IMDb</h3>
                        <a href="https://ramaqs-testing.vercel.app/" target="_blank" rel="noreferrer">
                            Live Preview <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                    <p><strong>Description : </strong>Movie browsing interface inspired by IMDb.</p>
                    <p>-Tech Used:</p>
                    <p>&nbsp;&nbsp;<strong>Front-End:</strong> Html5, Css3, JavaScript</p>
                    <p>&nbsp;&nbsp;<strong>Version Control:</strong> Git</p>
                </div>
            </div>
        </>
    );
};

export default ProjectsImdb;
