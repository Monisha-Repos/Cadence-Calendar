import { FaArrowRight } from 'react-icons/fa';
import Footer from '../components/footer.jsx'

export default function Home({ setCurrentPage }) {

    return <>
        <div className='hero'> {/* hero -> must cover 80% page height, remaining page appears below */}
            <h1>Cadence</h1>
            <p class='tagline'>Stop planning. Start doing.</p> {/* tagline -> accent color, widespace, extra weight*/}
            <p>Cadence learns how you work — your energy, your deadlines, your habits — and tells you exactly what to tackle next. No more staring at a blank afternoon wondering where to start.</p>
            <div className='button-group'>
                {/* must provide function call for onClick attr
                function call is saved and run on click 
                direct statements in attr will run immediately when page renders */ }
                <button type='button' onClick={() => setCurrentPage('sign-up')}>Create an Account</button>
                <button type='button' onClick={() => setCurrentPage('login')}>Login</button>
            </div>
        </div>

        <div className='why-cadence'>
            <h2>Why Cadence?</h2>
            <p>Most calendar apps just store your events. Cadence goes further — it studies when you're sharp, when you're not, and what's actually due, then builds your day around it. Got a free afternoon? Cadence knows whether that's the moment for deep work or busywork, based on how you actually perform, not a generic productivity template. Less deciding what to do. More getting it done.</p>
        </div>

        <div className='how-it-works'>
            <h2>How it works</h2>
            <div className='steps'> {/* steps -> flex */}
                <div className='step'>
                    <h4>Tell Cadence what's on your plate</h4>
                    <p>Add your tasks, deadlines, and how long each one usually takes.</p> {/* gray, light text color*/}
                </div>
                <div className="step-arrow"><FaArrowRight /></div>
                <div className='step'>
                    <h4>Cadence learns your rhythm</h4>
                    <p>It picks up on when you're sharp, when you're not, and adjusts as your patterns emerge.</p>
                </div>
                <div className="step-arrow"><FaArrowRight /></div>
                <div className='step'>

                    <h4>Get a plan, not just a calendar</h4>
                    <p>Open Cadence and see exactly what to work on next — matched to your energy and your deadlines.</p>
                </div>
            </div>
        </div>

        <Footer />

                
    </>

}