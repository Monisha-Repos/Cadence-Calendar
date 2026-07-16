import logo from '../assets/calendar-logo.png'

const SITE_NAME = 'Cadence'

export default function Landing({ setCurrentPage }) {
    return <>
        <div className="landing">
            <img className="landing-logo" src={logo} alt="Cadence logo" />

            {/* each letter animates in one-by-one via its --i delay */}
            <h1 className="landing-title" aria-label={SITE_NAME}>
                {SITE_NAME.split('').map((letter, i) => (
                    <span
                        key={i}
                        className="landing-letter"
                        style={{ '--i': i }}
                        aria-hidden="true"
                    >
                        {letter}
                    </span>
                ))}
            </h1>

            <p className="landing-tagline">
                Find your rhythm. A calm, simple calendar that helps you
                plan your days and keep your streaks alive.
            </p>

            <div className="landing-buttons">
                <button
                    className="landing-btn primary"
                    onClick={() => setCurrentPage('sign-up')}
                >
                    Get Started
                </button>
                <button
                    className="landing-btn secondary"
                    onClick={() => setCurrentPage('login')}
                >
                    Log In
                </button>
            </div>
        </div>
    </>
}
