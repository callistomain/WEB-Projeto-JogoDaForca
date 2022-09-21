import { useState } from "react";
import styled from "styled-components";
import palavras from "./scripts/palavras";
import Game from './components/Game';
import Keyboard from './components/Keyboard';
import Guess from './components/Guess';

// Variables =======================================================
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let currentWord = "";
let playsCount = 0;
let gameOver = false;
let wordNormalized;

// Component ========================================================
export default function App() {
  const [word, setWord] = useState("");
  const [pressed, setPressed] = useState([...alfabeto]);

  // Functions =======================================================
  function startGame() {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    currentWord = palavras[randomIndex];
    wordNormalized = currentWord.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
    playsCount = 0;
    gameOver = false;

    setWord(currentWord.split("").map(e => "_").join(""));
    setPressed([...alfabeto]);
  }

  function selectLetter(e) {
    const letter = e.target.innerText.toLowerCase();
    const newArr = word.split("");
    let found = false;
    for (let i = 0; i < currentWord.length; i++) {
      if (wordNormalized[i] === letter) {
        newArr[i] = currentWord[i];
        found = true;
      }
    }

    setWord(newArr.join(""));
    setPressed(pressed.map(e => e === letter ? false : e));
    if (!found) playsCount++;

    if (playsCount > 5) {
      setWord(currentWord);
      gameOver = true;
    }
  }

  function guessWord(e) {
    const input = e.target[0];
    e.preventDefault();

    if (input.value !== wordNormalized) playsCount = 6;
    input.value = "";
    
    setWord(currentWord);
    gameOver = true;
  }

  // JSX Return ========================================
  return (
    <Main>
      <Game playsCount={playsCount} startGame={startGame} gameOver={gameOver} word={word} />
      <Keyboard word={word} gameOver={gameOver} alfabeto={alfabeto} pressed={pressed} selectLetter={selectLetter} />
      <Guess guessWord={guessWord} />
    </Main>
  );
}

const Main = styled.div`
  margin-top: 32px;
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;