import styled from 'styled-components';
import images from "../scripts/images";

export default function Game(props) {
  return (
    <Style>
      <div className="top">
        <img src={images[props.playsCount]} alt="" data-identifier="game-image"/>
        <button onClick={props.startGame} data-identifier="choose-word">Escolher Palavra</button>
      </div>
      {props.gameOver
        ? (props.playsCount !== 6)
          ? <div className="word won" data-identifier="word">{props.word}</div>
          : <div className="word lost" data-identifier="word">{props.word}</div>
        : <div className="word" data-identifier="word">{props.word}</div>
      }
    </Style>
  );
}

const Style = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  .top {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .top img {
    width: 55%;
  }

  .top button {
    height: fit-content;
    color: white;
    background-color: #27ae60;
    outline: none;
    border: none;
    cursor: pointer;

    padding: 14px;
    margin: 20px;
    border-radius: 7px;
    font-weight: bold;
  }

  .word {
    font-size: 50px;
    letter-spacing: 8px;
    height: 50px;
    font-weight: bold;
  }
  
  .won {
    color: green;
  }

  .lost {
    color: red;
  }
`;