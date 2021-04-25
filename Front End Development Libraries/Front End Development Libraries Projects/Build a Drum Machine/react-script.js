const { useEffect, useState } = React;

const App = () => {
    const [currentAudioText, setCurrentAudioText] = useState('^_^');

    useEffect(() => {
        window.document.addEventListener('keypress', playAudio);

        return () => {
            window.document.removeEventListener('keypress', playAudio);
        }
    }, []);

    const playAudio = (event) => {
        for (let audioObj of audioArray) {
            if (audioObj.keyCode === event.code) {
                handleDrumClick(audioObj);
                return
            }
        }
    }

    const toggleActiveClass = (text) => {
        const drumPad = document.getElementById(text);
        drumPad.classList.add('drum-pad-active');
        setTimeout(() => {
            drumPad.classList.remove('drum-pad-active');
        }, (50));
    }

    const handleDrumClick = ({ id, text }) => {
        toggleActiveClass(text);
        setCurrentAudioText(text);
        const audio = document.getElementById(id);
        if (audio.currentTime !== 0) {
            audio.currentTime = 0;
        }
        audio.play();
    }

    return (
        <div className="wrapper">
            <h1 className="title">Drum Pad</h1>
            <div id="drum-machine">
                <span id="display">{currentAudioText}</span>
                <div className="drum-pads">
                    {audioArray.map(audio => (
                        <div
                            className="drum-pad"
                            id={audio.text}
                            key={audio.id}
                            onClick={() => handleDrumClick(audio)}
                        >
                            <span className="drum-text">{audio.id}</span>
                            <audio className="clip" src={audio.src} id={audio.id}></audio>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
