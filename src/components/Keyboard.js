import styled from 'styled-components';

export default function Keyboard(props) {
  return (
    <Style>
      {props.word && !props.gameOver
        ? props.alfabeto.map((e, i) => props.pressed[i]
          ? <Letter key={i} onClick={props.selectLetter} data-identifier="letter">{e.toUpperCase()}</Letter>
          : <LetterDisabled key={i} data-identifier="letter">{e.toUpperCase()}</LetterDisabled>
        )
        : props.alfabeto.map((e, i) => <LetterDisabled key={i} data-identifier="letter">{e.toUpperCase()}</LetterDisabled>)
      }
    </Style>
  );
}

const Style = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const LetterDisabled = styled.div`
  box-sizing: border-box;
  font-weight: bold;
  color: #79818a;
  background-color: #9faab5;
  border: none;
  padding: 13px 15px;
  border-radius: 5px;
`;

const Letter = styled(LetterDisabled)`
  color: #39739d;
  background-color: #e1ecf4;
  box-shadow:0px 0px 0px 1px #39739d inset;
  cursor: pointer;

  &:hover {
    background-color: #b9d7ed;
  }
`;