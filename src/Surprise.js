import { useState } from "react";
import secret from "./secret";
import "./Surprise.css"

const Surprise = () => {
    let speech = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    const [glassed, setGlassed] = useState(true);

    speech.lang = 'ja-JN';
    speech.text = secret;
    speech.pitch = Math.random() * 1.7;
    speech.rate = Math.random() * 8.5;
    speech.volume = 1;


    const pop = () => {
        setGlassed(false)
        window.speechSynthesis.speak(speech);
    }

    return(<div className="surprise">
        {glassed && <div className="glass">
            <button className="button" onClick={pop}>🎁</button>
        </div>}
    </div>)
};

export default Surprise