const { useState, useEffect, useRef } = React;

const initialState = {
    timerMins: 25,
    timerSec: 0,
    breakMins: 5,
    sessionMins: 25,
    formattedTime: formatInMM_SS(25, 0)
}

const App = () => {
    const [state, setState] = useState(initialState);
    const [sessionState, setSessionState] = useState('pause');
    const [currentScreen, setCurrentScreen] = useState('session');
    const [intervalID, setIntervalID] = useState(null);
    const audioElement = useRef(null);

    const handleTimer = () => {
        let nextIntervalTime = 1000;
        let { timerMins, timerSec } = state;
        let intervalCleared = true;

        const timerID = setInterval(() => {
            const startTime = Date.now();

            if (timerSec === 0) {
                timerSec = 60;
                timerMins--;
            }
            timerSec--;

            if (timerMins < 0 && intervalCleared) {
                timerSec = 0;
                intervalCleared = false;
                clearInterval(timerID);
                const nextScreen = currentScreen === 'session'
                    ? 'break'
                    : currentScreen === 'break'
                        ? 'session'
                        : 'break';

                timerMins = state[`${nextScreen}Mins`];
                setState({
                    ...state,
                    timerMins,
                    formattedTime: formatInMM_SS(timerMins, timerSec)
                });

                setCurrentScreen(nextScreen);
                setSessionState('restart');
            }
            setState({
                ...state,
                timerMins,
                timerSec,
                formattedTime: formatInMM_SS(timerMins, timerSec)
            });

            const endTime = Date.now();
            nextIntervalTime = 1000 - (endTime - startTime);
        }, nextIntervalTime);
        return timerID;
    }

    const handleTimeSetControls = (type, action) => {
        if (sessionState === 'playing') return;

        const modifiedState = { ...state };

        const key = `${type}Mins`;
        if (action === 'inc' && state[key] < 60) {
            modifiedState[key] = modifiedState[key] + 1;
        } else if (action === 'dec' && state[key] > 1) {
            modifiedState[key] = modifiedState[key] - 1;
        } else return;

        if (type === currentScreen) {
            setState({
                ...modifiedState,
                timerMins: modifiedState[key],
                timerSec: 0,
                formattedTime: formatInMM_SS(modifiedState[key], 0)
            });
        } else {
            setState({ ...modifiedState });
        }
    }

    const handleAudio = (shouldReset = false) => {
        if (shouldReset) {
            audioElement.current.pause();
            audioElement.current.currentTime = 0;
        } else {
            audioElement.current.play();
        }
    }

    const handleSessionControls = (type) => {
        if (type === 'reset') {
            setSessionState('pause');
            setCurrentScreen('session');
            setState(initialState);
            handleAudio(true);
        } else {
            if (sessionState === 'playing') {
                setSessionState('pause');
            } else {
                setSessionState('playing');
            }
        }
    }

    useEffect(() => {
        if (sessionState === 'playing') {
            setIntervalID(handleTimer());
        } else {
            clearInterval(intervalID);
            if (sessionState === 'restart') {
                setSessionState('playing');
                handleAudio();
            }
        }
    }, [sessionState]);

    return (
        <div className="wrapper">
            <header>
                <h1>25 + 5 Clock</h1>
            </header>
            <main>
                <div className="controls-wrapper">
                    <div className="control-wrapper break-wrapper">
                        <div className="control-heading">
                            <h3 id="break-label">Break Length</h3>
                        </div>
                        <div className="control-display">
                            <div
                                className="controls decrement"
                                id="break-decrement"
                                onClick={() => handleTimeSetControls('break', 'dec')}
                            >
                                &#10092;
                            </div>
                            <div id="break-length">{state.breakMins}</div>
                            <div
                                className="controls increment"
                                id="break-increment"
                                onClick={() => handleTimeSetControls('break', 'inc')}
                            >
                                &#10092;
                            </div>
                        </div>
                    </div>
                    <div className="control-wrapper session-wrapper">
                        <div className="control-heading">
                            <h3 id="session-label">Session Length</h3>
                        </div>
                        <div className="control-display">
                            <div
                                className="controls decrement"
                                id="session-decrement"
                                onClick={() => handleTimeSetControls('session', 'dec')}
                            >
                                &#10092;
                            </div>
                            <div id="session-length">{state.sessionMins}</div>
                            <div
                                className="controls increment"
                                id="session-increment"
                                onClick={() => handleTimeSetControls('session', 'inc')}
                            >
                                &#10092;
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timer-wrapper">
                    <div className="session-heading">
                        <h3 id="timer-label">{currentScreen} Time</h3>
                    </div>
                    <div className="session-timer">
                        <div
                            id="time-left"
                            style={{ color: state.timerMins === 0 ? '#bb3a11' : '#066b06' }}
                        >
                            {state.formattedTime}
                        </div>
                    </div>
                    <div className="session-controls">
                        <div className="controls" id="start_stop" onClick={() => handleSessionControls('play_pause')}>
                            {sessionState === 'playing'
                                ? <img className="pause-icon" src="./assets/pause.png" alt="pause" width="25" />
                                : <img className="play-icon" src="./assets/play.png" alt="play" width="25" />
                            }
                        </div>
                        <div className="controls" id="reset" onClick={() => handleSessionControls('reset')} title="Reset">
                            <img src="./assets/reset.png" alt="reset" className="reset-icon" width="25" />
                        </div>
                    </div>
                    <audio
                        id="beep"
                        preload="auto"
                        ref={audioElement}
                    >
                        <source src="./hi-hats.wav" type="audio/wav"></source>
                        Your browser doesn't support HTML5 audio
                    </audio>
                </div>
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
