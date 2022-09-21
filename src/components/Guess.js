import styled from 'styled-components';

export default function Guess(props) {
  return (
    <Style onSubmit={props.guessWord}>
      <p>Já sei a palavra!</p>
      <input type="text" name="" id="" data-identifier="type-guess"/>
      <button data-identifier="guess-button">Chutar</button>
    </Style>
  );
}

const Style = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -15px;
  gap: 15px;
  
  * {
    font-size: 14px;
  }

  p {
    letter-spacing: -0.33px;
  }
  
  input {
    width: 370px;
    outline: none;
    border-radius: 5px;
    border: 2px solid #3b3b3b;
    font-size: 18px;
    padding: 5px 8px;
    color: #3b3b3b;
    font-weight: bold;
  }
  
  button {
    background-color: #e1ecf4;
    color: #39739d;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #39739d;
    font-weight: bold;
    cursor: pointer;
    margin-left: 3px;
  }

  button:hover {
    background-color: #b9d7ed;
  }
`;