const Projects1 = () => {
    return (
        <>
            <h1 className="title">Project 1 :</h1>

            <div className="portfolio-box">
                <div className="img-box">
                    <img src="assets/imageStore4u.png" alt="Store4u Project" />
                </div>

                <div className="info-box">
                    <div className="info-title">
                        <h3>Project Name :Store4u</h3>
            
                        <a href="https://my-niche.vercel.app/" target="_blank" rel="noreferrer">
                            Live Preview <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                    <p> <strong>Description : </strong> is a Eco-Store for Material sport </p>
                    <p>-Tech Used:</p>
                    <p>
                        &nbsp;&nbsp;<strong>Front-End:</strong> Html5, Css3, JavaScript
                    </p>
                    <p>&nbsp;&nbsp;<strong>Back-End:</strong> Laravel, ,AlwaysData(Mysql)</p>
                    <p>&nbsp;&nbsp;<strong>Version Control:</strong> Git, Github,</p>
                    <p>&nbsp;&nbsp;<strong>Design:</strong> Figma </p>
                    <p>&nbsp;&nbsp;<strong>Hosting:</strong> Vercel,Cloudinary for Picutres</p>
                </div>
            </div>
        </>
    );
};

export default Projects1;
