import { memo } from 'react';

const Portfolio = memo(function Portfolio() {
    return (
        <>
            <h1 className="title">Latest Project:</h1>

            <div className="portfolio-box">
                <div className="img-box">
                    <img src="assets/image.png" alt="Figrbay Project" />
                </div>

                <div className="info-box">
                    <div className="info-title">
                        <h3>Project Name : Figrbay</h3>
                        <a href="https://figrbay.onrender.com/" target="_blank" rel="noreferrer">
                            Live Preview <i className="bx bx-link-external"></i>
                        </a>
                    </div>
                    <div className='info-content'>
                        <p><strong>Desciption : </strong> Is like Marketplace of 'Facebook' , Put your products and sell them for users to buy it</p>
                    </div>
                    <p>-Tech Used:</p>
                    <p>
                        &nbsp;&nbsp;<strong>Front-End:</strong>Html5,Css3,JavaScript
                    </p>
                    <p>&nbsp;&nbsp;<strong>Back-End:</strong> PHP,Mysql,MongoDB</p>
                    <p>&nbsp;&nbsp;<strong>Version Control:</strong> Git,Gitlab</p>
                    <p>&nbsp;&nbsp;<strong>Design:</strong> Figma</p>
                    <p>&nbsp;&nbsp;<strong>Hosting:</strong> Render</p>
                </div>

                <div className="btn-box">
                    <a href="https://github.com/Mostafa10Oulahyan" className="btn" target="_blank" rel="noreferrer">
                        More Projects
                    </a>
                    <a href="https://mysql-mongodb-atelier-fab7bb.gitlab.io/" className="btn" target="_blank" rel="noreferrer">
                        Les Ateliers
                    </a>
                </div>
            </div>
        </>
    );
});

export default Portfolio;

