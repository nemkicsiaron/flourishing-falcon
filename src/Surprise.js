import secret from "./secret";
import "./Surprise.css"

const Surprise = () => {
    let speech = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();

    speech.lang = 'ja-JN';
    speech.text = secret;
    speech.pitch = Math.random() * 1.7;
    speech.rate = Math.random() * 8.5;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    return(<div className="surprise">
        <script></script>
    </div>)
};

export default Surprise