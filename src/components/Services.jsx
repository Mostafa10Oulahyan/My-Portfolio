import { memo, useState, useCallback } from 'react';
import ServiceModal from './ServiceModal';

const Services = memo(function Services() {
    const [activeService, setActiveService] = useState(null);

    const openService = useCallback((key) => (e) => {
        e.preventDefault();
        setActiveService(key);
    }, []);

    const closeService = useCallback(() => {
        setActiveService(null);
    }, []);

    return (
        <>
            <h1 className="title">My Services</h1>

            <div className="services-box">
                <div className="services-content">
                    <i className="bx bx-code-alt"></i>
                    <h3>Web Development</h3>
                    <p>
                        Building modern, responsive websites using React, Laravel, and
                        PHP for complete full-stack solutions.
                    </p>
                    <a href="#" className="btn" onClick={openService('webdev')}>Read More</a>
                </div>

                <div className="services-content">
                    <i className="bx bxs-paint"></i>
                    <h3>Creative Design</h3>
                    <p>
                        Designing intuitive UI/UX interfaces with Figma, combining
                        functionality and visual appeal.
                    </p>
                    <a href="#" className="btn" onClick={openService('uiux')}>Read More</a>
                </div>

                <div className="services-content">
                    <i className="bx bx-search"></i>
                    <h3>Backend & Performance Optimization</h3>
                    <p>
                        I build secure backend systems and optimize web
                        applications for high performance and scalability.
                    </p>
                    <a href="#" className="btn" onClick={openService('backend')}>Read More</a>
                </div>
            </div>

            {activeService && (
                <ServiceModal serviceKey={activeService} onClose={closeService} />
            )}
        </>
    );
});

export default Services;
