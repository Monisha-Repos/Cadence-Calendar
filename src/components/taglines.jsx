// motivational phrases
const TAGLINES = [
    "Find your rhythm.",
    "Your time, in perfect cadence.",
    "Stop planning. Start doing.",
    "Plan less. Do more.",
    "Your next move, already mapped.",
    "Smarter days start here.",
    "Life has a rhythm. Find yours.",
    "Time, handled.",
    "Focus. We'll handle the rest.",
    "Breathe. We've got your schedule."
]

// randomly returns tagline
export default function getRandomTagline() {
    const index = Math.floor(Math.random() * TAGLINES.length);
    return TAGLINES[index];
}