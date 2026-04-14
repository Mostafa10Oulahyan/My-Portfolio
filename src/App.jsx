import { useReducer, useEffect, useCallback, useMemo, useRef, memo } from 'react';
import PixelSnow from './components/PixelSnow';
import ProfilePage from './components/ProfilePage';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects1 from './components/Projects1';
import Projects2 from './components/Projects2';
import Portfolio from './components/Portfolio';
import ProjectsImdb from './components/ProjectsImdb';
import ProjectsHangout from './components/ProjectsHangout';
import ProjectsQuiz from './components/ProjectsQuiz';
import ProjectsStore from './components/ProjectsStore';
import ContactMe from './components/ContactMe';

const TOTAL_PAGES = 6;

// ─── Reducer: all book state in one place ───────────────────────────
const initialState = {
    turnedPages: { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true },
    zIndexes: { 1: 20, 2: 21, 3: 22, 4: 23, 5: 24, 6: 25 },
    coverTurned: false,
    coverZIndex: 100,
};

function bookReducer(state, action) {
    switch (action.type) {
        case 'TURN_COVER':
            return { ...state, coverTurned: true };

        case 'HIDE_COVER':
            return { ...state, coverZIndex: -1 };

        case 'SET_PAGE_TURNED':
            return {
                ...state,
                turnedPages: { ...state.turnedPages, [action.pageId]: action.turned },
            };

        case 'SET_Z_INDEX':
            return {
                ...state,
                zIndexes: { ...state.zIndexes, [action.pageId]: action.zIndex },
            };

        case 'TOGGLE_PAGE':
            return {
                ...state,
                turnedPages: {
                    ...state.turnedPages,
                    [action.pageId]: !state.turnedPages[action.pageId],
                },
            };

        default:
            return state;
    }
}

// ─── Memoized page wrapper to prevent unnecessary re-renders ─────────
const PageSpread = memo(function PageSpread({
    pageId, turned, zIndex,
    FrontComponent, BackComponent,
    onNextClick, onPrevClick,
    backProfileSlot,
    frontId, backId,
}) {
    return (
        <div
            className={`book-page page-right ${turned ? 'turn' : ''}`}
            style={{ zIndex }}
        >
            <div className="page-front" id={frontId}>
                <FrontComponent />
                <span className="nextprev-btn" onClick={onNextClick}>
                    <i className="bx bx-chevron-right"></i>
                </span>
            </div>
            <div className="page-back" id={backId}>
                <BackComponent />
                <span className="nextprev-btn back" onClick={onPrevClick}>
                    <i className="bx bx-chevron-left"></i>
                </span>
                {backProfileSlot}
            </div>
        </div>
    );
});

// ─── Snow background (memoized — props never change) ─────────────────
const SnowBackground = memo(function SnowBackground() {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
            <PixelSnow
                color="#ffffff"
                flakeSize={0.01}
                minFlakeSize={1.25}
                pixelResolution={500}
                speed={1.25}
                density={0.3}
                direction={125}
                brightness={1}
                depthFade={8}
                farPlane={20}
                gamma={0.4545}
                variant="round"
            />
        </div>
    );
});

// ─── Main App ────────────────────────────────────────────────────────
function App() {
    const [state, dispatch] = useReducer(bookReducer, initialState);
    const { turnedPages, zIndexes, coverTurned, coverZIndex } = state;

    // Ref to always access latest state (avoids stale closures in timeouts)
    const stateRef = useRef(state);
    stateRef.current = state;

    // ── Viewport scaling (unchanged) ──
    const scaleBook = useCallback(() => {
        const bookWidthInRem = 66;
        const bookHeightInRem = 55;
        const baseFontSize = 20;

        if (window.innerWidth <= 768) {
            document.documentElement.style.fontSize = '16px';
            return;
        }

        const vp = window.visualViewport || { width: window.innerWidth, height: window.innerHeight };
        const idealForWidth = vp.width / bookWidthInRem;
        const idealForHeight = vp.height / bookHeightInRem;
        const fontSize = Math.min(idealForWidth, idealForHeight, baseFontSize);
        document.documentElement.style.fontSize = fontSize + 'px';
    }, []);

    useEffect(() => {
        scaleBook();
        window.addEventListener('resize', scaleBook);
        if (window.visualViewport) window.visualViewport.addEventListener('resize', scaleBook);
        return () => {
            window.removeEventListener('resize', scaleBook);
            if (window.visualViewport) window.visualViewport.removeEventListener('resize', scaleBook);
        };
    }, [scaleBook]);

    // ── Opening animation ──
    useEffect(() => {
        const timers = [];

        timers.push(setTimeout(() => dispatch({ type: 'TURN_COVER' }), 2100));
        timers.push(setTimeout(() => dispatch({ type: 'HIDE_COVER' }), 2800));

        const pageOrder = [6, 5, 4, 3, 2, 1];
        pageOrder.forEach((pageId, i) => {
            timers.push(setTimeout(() => {
                dispatch({ type: 'SET_PAGE_TURNED', pageId, turned: false });
                timers.push(setTimeout(() => {
                    dispatch({ type: 'SET_Z_INDEX', pageId, zIndex: 10 + i });
                }, 500));
            }, (i + 1) * 200 + 2100));
        });

        return () => timers.forEach(t => clearTimeout(t));
    }, []);

    // ── Page toggle (side effects OUTSIDE state updater) ──
    const togglePage = useCallback((pageId, buttonIndex) => {
        // Read latest state via ref (never stale)
        const isTurned = stateRef.current.turnedPages[pageId];
        dispatch({ type: 'TOGGLE_PAGE', pageId });

        // Schedule z-index update after CSS animation (500ms)
        setTimeout(() => {
            dispatch({
                type: 'SET_Z_INDEX',
                pageId,
                zIndex: isTurned ? 20 - buttonIndex : 20 + buttonIndex,
            });
        }, 500);
    }, []);

    // ── Contact Me — flip all pages forward ──
    const isMobile = useCallback(() => window.innerWidth <= 768, []);

    const handleContactMe = useCallback(() => {
        if (isMobile()) {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        for (let i = 1; i <= TOTAL_PAGES; i++) {
            const delay = i * 200;
            setTimeout(() => {
                dispatch({ type: 'TOGGLE_PAGE', pageId: i });
                setTimeout(() => {
                    const currentlyTurned = stateRef.current.turnedPages[i];
                    dispatch({
                        type: 'SET_Z_INDEX',
                        pageId: i,
                        zIndex: currentlyTurned ? 20 + (i - 1) : 20 + (TOTAL_PAGES - i),
                    });
                }, 500);
            }, delay);
        }
    }, [isMobile]);

    const handleBackProfile = useCallback(() => {
        if (isMobile()) {
            document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        for (let i = TOTAL_PAGES; i >= 1; i--) {
            const delay = (TOTAL_PAGES - i) * 200;
            setTimeout(() => {
                dispatch({ type: 'TOGGLE_PAGE', pageId: i });
                setTimeout(() => {
                    const currentlyTurned = stateRef.current.turnedPages[i];
                    dispatch({
                        type: 'SET_Z_INDEX',
                        pageId: i,
                        zIndex: currentlyTurned ? 20 + (i - 1) : 20 + (TOTAL_PAGES - i),
                    });
                }, 500);
            }, delay);
        }
    }, [isMobile]);

    // ── Memoized click handlers (stable references for PageSpread memo) ──
    const pageHandlers = useMemo(() => ({
        next1: () => togglePage(1, 0),
        prev1: () => togglePage(1, 1),
        next2: () => togglePage(2, 2),
        prev2: () => togglePage(2, 3),
        next3: () => togglePage(3, 4),
        prev3: () => togglePage(3, 5),
        next4: () => togglePage(4, 6),
        prev4: () => togglePage(4, 7),
        next5: () => togglePage(5, 8),
        prev5: () => togglePage(5, 9),
        next6: () => togglePage(6, 10),
        prev6: () => togglePage(6, 11),
    }), [togglePage]);

    // ── Back profile link (memoized) ──
    const backProfileSlot = useMemo(() => (
        <a
            href="#"
            className="back-profile"
            onClick={(e) => { e.preventDefault(); handleBackProfile(); }}
        >
            <p>Profile</p>
            <i className="bx bxs-user"></i>
        </a>
    ), [handleBackProfile]);

    return (
        <>
            <SnowBackground />

            <div className="wrapper" style={{ position: 'relative', zIndex: 1 }}>
                <div className="cover cover-left"></div>
                <div
                    className={`cover cover-right ${coverTurned ? 'turn' : ''}`}
                    style={{ zIndex: coverZIndex }}
                ></div>

                <div className="book">
                    <div className="book-page page-left" id="profile">
                        <ProfilePage onContactMe={handleContactMe} />
                    </div>

                    <PageSpread
                        pageId={1}
                        turned={turnedPages[1]}
                        zIndex={zIndexes[1]}
                        FrontComponent={WorkExperience}
                        BackComponent={Education}
                        onNextClick={pageHandlers.next1}
                        onPrevClick={pageHandlers.prev1}
                        frontId="work-experience"
                        backId="education"
                    />

                    <PageSpread
                        pageId={2}
                        turned={turnedPages[2]}
                        zIndex={zIndexes[2]}
                        FrontComponent={Services}
                        BackComponent={Skills}
                        onNextClick={pageHandlers.next2}
                        onPrevClick={pageHandlers.prev2}
                        frontId="services"
                        backId="skills"
                    />

                    <PageSpread
                        pageId={3}
                        turned={turnedPages[3]}
                        zIndex={zIndexes[3]}
                        FrontComponent={Projects1}
                        BackComponent={Projects2}
                        onNextClick={pageHandlers.next3}
                        onPrevClick={pageHandlers.prev3}
                        frontId="projects1"
                        backId="projects2"
                    />

                    <PageSpread
                        pageId={4}
                        turned={turnedPages[4]}
                        zIndex={zIndexes[4]}
                        FrontComponent={Portfolio}
                        BackComponent={ProjectsImdb}
                        onNextClick={pageHandlers.next4}
                        onPrevClick={pageHandlers.prev4}
                        frontId="portfolio"
                        backId="projects-imdb"
                    />

                    <PageSpread
                        pageId={5}
                        turned={turnedPages[5]}
                        zIndex={zIndexes[5]}
                        FrontComponent={ProjectsHangout}
                        BackComponent={ProjectsQuiz}
                        onNextClick={pageHandlers.next5}
                        onPrevClick={pageHandlers.prev5}
                        frontId="projects-hangout"
                        backId="projects-quiz"
                    />

                    <PageSpread
                        pageId={6}
                        turned={turnedPages[6]}
                        zIndex={zIndexes[6]}
                        FrontComponent={ProjectsStore}
                        BackComponent={ContactMe}
                        onNextClick={pageHandlers.next6}
                        onPrevClick={pageHandlers.prev6}
                        backProfileSlot={backProfileSlot}
                        frontId="projects-store"
                        backId="contact"
                    />
                </div>
            </div>
        </>
    );
}

export default App;
