import './App.css';
import { useState, useRef } from 'react';

function App() {
  const userInput = useRef();
  const [message, setMessage] = useState('Input is case-sensitive, and supports only major or minor');
  const [musicalKey, setMusicalKey] = useState('');
  const [showChords, updateShowChords] = useState(false);
  const [background, setBackground] = useState(localStorage.getItem("background"));

  const darkMode = () => {
    setBackground('dark');
    localStorage.setItem("background", "dark")
  }

  const lightMode = () => {
    setBackground('light');
    localStorage.setItem("background", "light")
  }

  const checkValidKey = () => {
    const userInputValue = userInput.current.value.trim(); // Convert to uppercase for case-insensitive comparison

    // Regular expressions for matching major and minor keys
    const majorKeyPattern = /^(C|D|E|F|G|A|B)$/; // Matches C, D, E, F, G, A, B (add /i for case-insensitive)
    const minorKeyPattern = /^(Cm|Dm|Em|Fm|Gm|Am|Bm)$/; // Matches Cm, Dm, Em, Fm, Gm, Am, Bm

    if (majorKeyPattern.test(userInputValue) || minorKeyPattern.test(userInputValue)) {
      // Valid key entered
      setMessage('');
      setMusicalKey(userInputValue);
      updateShowChords(true);
      return;
    }

    setMessage('Key is not valid or not supported. Try entering "A" or "Am".');
  } 
  
  return (
    <div className={background === 'dark' ? 'dark' : 'light'}>
      <div>
        <label>Enter a musical key:</label> <br />
        <div>{message}</div>
        <input ref={userInput} type="text" />
        <button onClick={checkValidKey}>Enter</button> <br />
      </div>
      {showChords === true && 
      <div>
        <div>
          <br />
          Chords in {musicalKey} are:
        </div>
        <div>
          <br />
          {musicalKey === "C" && <div>C Dm Em F G Am Bmb5</div>}
          {musicalKey === "D" && <div>D Em F#m G A Bm C#mb5</div>}
          {musicalKey === "E" && <div>E F#m G#m A B C#m D#mb5</div>}
          {musicalKey === "F" && <div>F Gm Am Bb C Dm Emb5</div>}
          {musicalKey === "G" && <div>G	Am	Bm	C	D	Em	F#m♭5</div>}
          {musicalKey === "A" && <div>A	Bm	C#m	D	E	F#m	G#m♭5</div>}
          {musicalKey === "B" && <div>B	C#m	D#m	E	F#	G#m	A#m♭5</div>}

          {musicalKey === "Am" && <div>Am	Bm♭5	C	Dm	Em	F	G</div>}
          {musicalKey === "Bm" && <div>Bm	C#m♭5	D	Em	F#m	G	A</div>}
          {musicalKey === "Cm" && <div>Cm	Dm♭5	E♭	Fm	Gm	A♭	B♭</div>}
          {musicalKey === "Dm" && <div>Dm	Em♭5	F	Gm	Am	B♭	C</div>}
          {musicalKey === "Em" && <div>Em	F#m♭5	G	Am	Bm	C	D</div>}
          {musicalKey === "Fm" && <div>Fm	Gm♭5	A♭	B♭m	Cm	D♭	E♭m</div>}
          {musicalKey === "Gm" && <div>Gm	Am♭5	B♭	Cm	Dm	E♭	F</div>}
          <br />
        </div>
      </div>}
      <div>
        {background === 'light' && <button onClick={darkMode}>Dark</button>}
        {background === 'dark' && <button onClick={lightMode}>Light</button>}
      </div>
    </div>
  );
}

export default App;
