import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
    return <>
        <footer className="site-footer">
            <p className='tagline footer-credit'>Cadence — a project by Monisha</p>
            <div className="footer-links">
                <a href="https://github.com/Monisha-Repos/Cadence-Calendar" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/monisha-natarajan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    </>
}