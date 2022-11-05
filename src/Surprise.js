import secret from "./secret";


const Surprise = () => {
    let speech = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();

    speech.lang = 'en';
    speech.text = secret;
    speech.pitch = 2;
    speech.voice = voices[0];
    window.speechSynthesis.speak(speech);
    return(<div>
        <h1>HELLO</h1>
    </div>)
};

export default Surprise