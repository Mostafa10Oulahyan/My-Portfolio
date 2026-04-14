const ProjectsStore = () => {
    return (
        <>
            <h1 className="title">Project Store :</h1>

            <div className="portfolio-box">
                <div className="img-box">
                    <img src="assets/Mystore.png" alt="My Store Project" />
                </div>

                <div className="info-box">
                    <div className="info-title">
                        <h3>Project Name : My Store</h3>
                        <a href="https://mystore-client-rho.vercel.app/" target="_blank" rel="noreferrer">
                            Live Preview <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                    <p><strong>Description : </strong>Store project with product-focused design.</p>
                    <p>-Tech Used:</p>
                    <p>&nbsp;&nbsp;<strong>Front-End:</strong> Html5, Css3, JavaScript</p>
                    <p>&nbsp;&nbsp;<strong>Version Control:</strong> Git</p>
                </div>
            </div>
        </>
    );
};

export default ProjectsStore;
