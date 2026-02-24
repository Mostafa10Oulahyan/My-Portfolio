const Projects2 = () => {
    return (
        <>
            <h1 className="title">Project 2 :</h1>
            <div className="portfolio-box">
                <div className="img-box">
                    <img src="assets/imageSwipyeatAdmin.png" alt="Swipyeat Project" />
                </div>
                <div className="info-box">
                    <div className="info-title">
                        <h3><strong>Project Name : </strong> Swipyeat</h3>
                        <a
                            href="https://adminswipyeat.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Preview <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                    <div className="info-content">
                        <p><strong>Description : </strong> SaaS Restaurant Management (Admin Part) username: <strong>restaurantadmin@gmail.com</strong> password: same like username </p>
                    </div>
                    <p> <strong>-Tech Used:</strong></p>
                    <p>
                        &nbsp;&nbsp;<strong>Front-End:</strong> Html5, Css3, JavaScript
                    </p>
                    <p>&nbsp;&nbsp;<strong>Back-End:</strong> MySQL, MongoDB</p>
                    <p>&nbsp;&nbsp;<strong>Version Control:</strong> Git, Gitlab</p>
                </div>

                <div className="btn-box" style={{ marginTop: '2rem' }}>
                    <a
                        href="https://www.swipyeat.com/"
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        The Whole Service
                    </a>
                </div>
            </div>
        </>
    );
};

export default Projects2;
