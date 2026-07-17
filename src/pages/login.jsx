import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import getRandomTagline from '../components/taglines.jsx'


export default function Login({ setCurrentPage }) {
    // Lazy initializer: the function only runs ONCE, on mount
    const [tagline] = useState(getRandomTagline);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: check username/password against localStorage, redirect to /dashboard
        setCurrentPage('calendar');
    }

    return <>
        <button type='button' className='back-home' aria-label='Back to home' onClick={() => setCurrentPage('home')}>
            <FaArrowLeft size={18} />
        </button>

        <div className='center-block'>
            <h1>Login</h1>
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

                <button type="submit" onClick={ () => setCurrentPage('calendar') }>Log In</button>

                {/* 📌 REVIEW LATER */}
                <p>
                    Don't have an account?{' '}
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage('sign-up');
                    }}>
                        Sign Up!
                    </a>
                </p>
            </form>
        </div>
    </>
}