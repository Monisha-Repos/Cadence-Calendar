import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaLightbulb, FaCalendarCheck, FaPenFancy, FaPaperPlane, FaSignOutAlt } from 'react-icons/fa'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

// hours shown in the day view timeline (6 AM – 10 PM)
const DAY_HOURS = Array.from({ length: 17 }, (_, i) => i + 6)

function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate()
}

// every date cell for the month grid: leading/trailing days fill full weeks
function getMonthGrid(viewDate) {
    const firstOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1)
    const start = new Date(firstOfMonth)
    start.setDate(start.getDate() - start.getDay()) // back up to Sunday

    return Array.from({ length: 42 }, (_, i) => {
        const d = new Date(start)
        d.setDate(start.getDate() + i)
        return d
    })
}

// the 7 days of the week containing viewDate
function getWeekDays(viewDate) {
    const start = new Date(viewDate)
    start.setDate(start.getDate() - start.getDay())

    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(start)
        d.setDate(start.getDate() + i)
        return d
    })
}

function formatHour(hour) {
    if (hour === 12) return '12 PM'
    return hour < 12 ? `${hour} AM` : `${hour - 12} PM`
}

export default function Calendar({ setCurrentPage }) {
    const today = new Date()

    const [view, setView] = useState('month')       // 'month' | 'week' | 'day'
    const [viewDate, setViewDate] = useState(today) // the date the calendar is centered on

    const [chatInput, setChatInput] = useState('')
    const [messages, setMessages] = useState([
        { from: 'ai', text: "Hi! I'm your Cadence assistant. Ask me anything about your schedule." },
    ])

    // step back/forward by one month, week, or day depending on the view
    function shiftDate(direction) {
        const next = new Date(viewDate)
        if (view === 'month') next.setMonth(next.getMonth() + direction)
        else if (view === 'week') next.setDate(next.getDate() + 7 * direction)
        else next.setDate(next.getDate() + direction)
        setViewDate(next)
    }

    function handleChatSubmit(e) {
        e.preventDefault()
        const text = chatInput.trim()
        if (!text) return

        setMessages([
            ...messages,
            { from: 'user', text },
            // TODO: replace with a real AI response
            { from: 'ai', text: "I'm still learning! Soon I'll be able to help you plan your day." },
        ])
        setChatInput('')
    }

    function handleQuickAction(label) {
        setMessages([
            ...messages,
            { from: 'user', text: label },
            // TODO: replace with real AI-generated content
            { from: 'ai', text: `"${label}" is coming soon — I'll be able to help with that once I'm connected.` },
        ])
    }

    const headerLabel = view === 'month'
        ? `${MONTHS[viewDate.getMonth()]} ${viewDate.getFullYear()}`
        : view === 'week'
            ? `Week of ${MONTHS[getWeekDays(viewDate)[0].getMonth()]} ${getWeekDays(viewDate)[0].getDate()}`
            : `${WEEKDAYS[viewDate.getDay()]}, ${MONTHS[viewDate.getMonth()]} ${viewDate.getDate()}`

    return <div className='calendar-page'>

        {/* ---------- Left: calendar view ---------- */}
        <section className='calendar-panel'>
            <header className='calendar-header'>
                <div className='calendar-nav'>
                    <button type='button' aria-label='Previous' onClick={() => shiftDate(-1)}>
                        <FaChevronLeft size={14} />
                    </button>
                    <h2>{headerLabel}</h2>
                    <button type='button' aria-label='Next' onClick={() => shiftDate(1)}>
                        <FaChevronRight size={14} />
                    </button>
                    <button type='button' className='today-btn' onClick={() => setViewDate(today)}>
                        Today
                    </button>
                </div>

                <div className='view-toggle' role='group' aria-label='Calendar view'>
                    {['month', 'week', 'day'].map((v) => (
                        <button
                            key={v}
                            type='button'
                            className={view === v ? 'active' : ''}
                            onClick={() => setView(v)}
                        >
                            {v[0].toUpperCase()}
                        </button>
                    ))}
                </div>
            </header>

            {view === 'month' && (
                <div className='month-grid'>
                    {WEEKDAYS.map((day) => (
                        <div key={day} className='weekday-label'>{day}</div>
                    ))}
                    {getMonthGrid(viewDate).map((date) => (
                        <div
                            key={date.toISOString()}
                            className={
                                'day-cell'
                                + (date.getMonth() !== viewDate.getMonth() ? ' outside-month' : '')
                                + (isSameDay(date, today) ? ' today' : '')
                            }
                        >
                            <span>{date.getDate()}</span>
                        </div>
                    ))}
                </div>
            )}

            {view === 'week' && (
                <div className='week-grid'>
                    {getWeekDays(viewDate).map((date) => (
                        <div
                            key={date.toISOString()}
                            className={'week-column' + (isSameDay(date, today) ? ' today' : '')}
                        >
                            <div className='week-column-header'>
                                <span>{WEEKDAYS[date.getDay()]}</span>
                                <strong>{date.getDate()}</strong>
                            </div>
                            <div className='week-column-body'>
                                {/* TODO: render this day's events here */}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {view === 'day' && (
                <div className='day-timeline'>
                    {DAY_HOURS.map((hour) => (
                        <div key={hour} className='hour-row'>
                            <span className='hour-label'>{formatHour(hour)}</span>
                            <div className='hour-slot'>
                                {/* TODO: render events that start at this hour */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>

        {/* ---------- Right: AI dashboard ---------- */}
        <aside className='ai-dashboard'>
            <header className='ai-header'>
                <h3>Cadence AI</h3>
                <button
                    type='button'
                    className='logout-btn'
                    aria-label='Log out'
                    onClick={() => setCurrentPage('home')}
                >
                    <FaSignOutAlt size={16} />
                </button>
            </header>

            <div className='ai-actions'>
                <button type='button' onClick={() => handleQuickAction('See your daily suggestions')}>
                    <FaLightbulb />
                    <span>Daily Suggestions</span>
                </button>
                <button type='button' onClick={() => handleQuickAction('See your recommended schedule')}>
                    <FaCalendarCheck />
                    <span>Recommended Schedule</span>
                </button>
                <button type='button' onClick={() => handleQuickAction('Log current activity/productivity')}>
                    <FaPenFancy />
                    <span>Log Activity</span>
                </button>
            </div>

            <div className='ai-chat'>
                {messages.map((msg, i) => (
                    <p key={i} className={'chat-bubble ' + msg.from}>{msg.text}</p>
                ))}
            </div>

            <form className='chat-input' onSubmit={handleChatSubmit}>
                <input
                    type='text'
                    placeholder='Ask Cadence AI...'
                    aria-label='Chat message'
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                />
                <button type='submit' aria-label='Send message'>
                    <FaPaperPlane size={14} />
                </button>
            </form>
        </aside>
    </div>
}
