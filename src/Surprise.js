import secret from "./secret";
import "./Surprise.css"

const Surprise = () => {
    let speech = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();

    speech.lang = 'en-GB';
    speech.text = secret;
    speech.pitch = 2;
    speech.rate = 4;
    speech.volume = 1;
    console.log(voices)
    let up = false;

    const pitch = () => {
        window.speechSynthesis.pause();
        speech.pitch += up ? 0.05 : -0.05;
        up = speech.pitch <= 0;
        speech.rate = Math.floor(Math.random() * (9.5 - 0 + 1) )
        window.speechSynthesis.resume();
        setTimeout(pitch(), 200);
    };

    pitch();

    return(<div className="surprise">
        <h1>LAJOS</h1>
        <script> window.speechSynthesis.speak(speech);</script>
    </div>)
};

export default Surprise