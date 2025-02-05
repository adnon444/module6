import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
    const [mood, setMood] = useState('happy');

    const handleWinLotto = () => {
        setMood('ecstatic')
    }

    const handleRunningLate = () => {
        let newMood = 'stressed'
        if (mood === 'stressed') newMood = 'Really stressed'
        else if (mood === 'really stressed') newMood = 'giving up'

        setMood(newMood)
    }


    return (
        <div className="MoodChanger componentBox">
        Current Mood: {mood}

        <button onClick={() => setMood('tired')}>
            Stayed up late 
            </button>
        
        <button onClick={() => setMood('hungry')}>
            Skipped lunch 
            </button>

        <button onClick={() => setMood('optimistic')}>
            Got good sleep 
            </button>

        <button onClick={handleRunningLate}>Running Late</button>
        <button onClick={handleWinLotto}>Win Lotto</button>

        </div>
    )
}

export default MoodChanger;