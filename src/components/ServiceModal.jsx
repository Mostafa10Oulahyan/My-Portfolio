import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const SERVICE_DATA = {
    webdev: {
        title: 'Web Development',
        subtitle: 'What I Deliver:',
        icon: 'bx bx-code-alt',
        gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #7c3aed 100%)',
        items: [
            'Custom Web Applications',
            'RESTful API Integration',
            'Authentication Systems',
            'Admin Dashboards',
            'Database Architecture',
            'Deployment & Hosting',
        ],
    },
    uiux: {
        title: 'Creative Design',
        subtitle: 'What I Provide:',
        icon: 'bx bxs-paint',
        gradient: 'linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #6366f1 100%)',
        items: [
            'Wireframes & Prototypes',
            'Responsive Layout Design',
            'Design Systems',
            'Accessibility Optimization',
            'User Flow Planning',
        ],
    },
    backend: {
        title: 'Backend & Performance',
        subtitle: 'What I Handle:',
        icon: 'bx bx-search',
        gradient: 'linear-gradient(135deg, #34d399 0%, #06b6d4 50%, #3b82f6 100%)',
        items: [
            'API Development',
            'Database Design',
            'Query Optimization',
            'Authentication & Authorization',
            'Server Configuration',
            'Performance Monitoring',
        ],
    },
};

const ServiceModal = ({ serviceKey, onClose }) => {
    const overlayRef = useRef(null);
    const cardRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const itemRefs = useRef([]);
    const glowRef = useRef(null);
    const closeRef = useRef(null);
    const tlRef = useRef(null);

    const data = SERVICE_DATA[serviceKey];
    if (!data) return null;

    const handleClose = useCallback(() => {
        const tl = gsap.timeline({ onComplete: onClose });

        tl.to(itemRefs.current, {
            x: 20, opacity: 0, scale: 0.9,
            duration: 0.15, stagger: 0.04, ease: 'power2.in',
        });
        tl.to([subtitleRef.current, closeRef.current], {
            opacity: 0, y: -10, duration: 0.15, ease: 'power2.in',
        }, '-=0.1');
        tl.to(titleRef.current, {
            opacity: 0, y: -20, scale: 0.9, duration: 0.2, ease: 'power2.in',
        }, '-=0.1');
        tl.to(cardRef.current, {
            scale: 0.85, opacity: 0, rotateX: 10, duration: 0.25, ease: 'power3.in',
        }, '-=0.15');
        tl.to(overlayRef.current, {
            opacity: 0, duration: 0.2, ease: 'power2.in',
        }, '-=0.15');
    }, [onClose]);

    useEffect(() => {
        const tl = gsap.timeline();
        tlRef.current = tl;

        // Overlay fade in
        gsap.set(overlayRef.current, { opacity: 0 });
        gsap.set(cardRef.current, { scale: 0.8, opacity: 0, rotateX: 15, transformPerspective: 800 });
        gsap.set(titleRef.current, { opacity: 0, y: -30, scale: 0.8 });
        gsap.set(subtitleRef.current, { opacity: 0, x: -20 });
        gsap.set(closeRef.current, { opacity: 0, scale: 0, rotation: -180 });
        gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });
        itemRefs.current.forEach(el => {
            if (el) gsap.set(el, { opacity: 0, x: -40, scale: 0.85, rotateY: -20, transformPerspective: 600 });
        });

        // Animation sequence
        tl.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });

        tl.to(glowRef.current, { opacity: 0.6, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1');

        tl.to(cardRef.current, {
            scale: 1, opacity: 1, rotateX: 0,
            duration: 0.45, ease: 'back.out(1.6)',
        }, '-=0.3');

        tl.to(titleRef.current, {
            opacity: 1, y: 0, scale: 1,
            duration: 0.35, ease: 'back.out(2)',
        }, '-=0.2');

        tl.to(closeRef.current, {
            opacity: 1, scale: 1, rotation: 0,
            duration: 0.3, ease: 'back.out(3)',
        }, '-=0.25');

        tl.to(subtitleRef.current, {
            opacity: 1, x: 0,
            duration: 0.25, ease: 'power3.out',
        }, '-=0.15');

        tl.to(itemRefs.current, {
            opacity: 1, x: 0, scale: 1, rotateY: 0,
            duration: 0.3, stagger: 0.07, ease: 'power3.out',
        }, '-=0.1');

        // Continuous glow pulse
        gsap.to(glowRef.current, {
            opacity: 0.3, scale: 1.1,
            duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut',
        });

        return () => {
            tl.kill();
            gsap.killTweensOf(glowRef.current);
        };
    }, []);

    return (
        <div
            ref={overlayRef}
            className="service-modal-overlay"
            onClick={handleClose}
        >
            {/* Animated glow orb */}
            <div
                ref={glowRef}
                className="service-modal-glow"
                style={{ background: data.gradient }}
            />

            <div
                ref={cardRef}
                className="service-modal-card"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button ref={closeRef} className="service-modal-close" onClick={handleClose}>
                    <i className="bx bx-x"></i>
                </button>

                {/* Title area */}
                <div ref={titleRef} className="service-modal-header">
                    <div className="service-modal-icon" style={{ background: data.gradient }}>
                        <i className={data.icon}></i>
                    </div>
                    <h3>{data.title}</h3>
                </div>

                {/* Subtitle */}
                <p ref={subtitleRef} className="service-modal-subtitle">{data.subtitle}</p>

                {/* Items list */}
                <ul className="service-modal-list">
                    {data.items.map((item, i) => (
                        <li
                            key={i}
                            ref={(el) => (itemRefs.current[i] = el)}
                            className="service-modal-item"
                        >
                            <span className="service-modal-check">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { SERVICE_DATA };
export default ServiceModal;
