import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import getRandomTagline from '../components/taglines.jsx'


export default function SignUp({ setCurrentPage }) {
    // motivational phrase generated on mount
    const [tagline] = useState(getRandomTagline);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: validate + save to localStorage, then redirect to /login
        setCurrentPage('login');
    }

    return <>
        <button type='button' className='back-home' aria-label='Back to home' onClick={() => setCurrentPage('home')}>
            <FaArrowLeft size={18} />
        </button>

        <div className='center-block'>
            
            {/* 📌 REVIEW LATER */}
            <h1>Create your account</h1>
            <p>{tagline}</p>

            <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

                <button type="submit" onClick={() => setCurrentPage('calendar')}>Sign Up</button>

            <p>
                Already have an Account?{' '}
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('login');
                }}>
                    Log In!
                </a>
            </p>
            </form>
        </div>
    </>
}