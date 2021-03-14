import { useState } from 'react';
import '../styling/App.css';
import Card from './Card.js';
import BestScore from './BestScore.js';
import Score from './Score.js';

function App() {
  const imgSrcArr = [
    'https://bit.ly/3rtnv6d',
    'https://bit.ly/3rnqJbj',
    'https://bit.ly/3kVsXw8',
    'https://bit.ly/3cbB4R9',
    'https://bit.ly/3v8dwWi',
    'https://bit.ly/2O4D5qB',
    'https://bit.ly/3br5dg6',
    'https://bit.ly/38pB3Ig',
    'https://bit.ly/38oD1ZI',
    'https://bit.ly/3bxx9yU'
  ];

  const [score, setScore] = useState(0),
        [bestScore, setBestScore] = useState(0),
        [srcIndexArr, setIndexArr] = useState(setRandomIndexes),
        [prevCardSelection, setCardSelection] = useState([]);

  return (
    <div className="App">
      <BestScore bestScore={bestScore}/>
      <h1>Memory Cards</h1>
      <Score score={score}/>
      <Card src={imgSrcArr[srcIndexArr[0]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[1]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[2]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[3]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[4]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[5]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[6]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[7]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[8]]} handler={e => handleCardClick(e)}/>
      <Card src={imgSrcArr[srcIndexArr[9]]} handler={e => handleCardClick(e)}/>
    </div>
  );

  function setRandomIndexes() {
    let arr = [],
        containsRand = false;

    while (arr.length < 10) {
      let rand = Math.floor(Math.random() * 10);
      for (const index in arr) {
        if (arr[index] === rand) {
          containsRand = true;
          break;
        }
      }

      if (!containsRand) {
        arr.push(rand);
      }
      containsRand = false;
    }
    
    return arr;
  }

  function handleCardClick(event) {
    const cardImg = event.target.src;
    
    if (score > 0 && !verifyUniqueCardSelection(cardImg)) {
      setScore(0);
      setCardSelection([]);
      
      if (score > bestScore) {
        setBestScore(score);
      }
    } else if (score === 9) {
      setScore(score + 1);
      alert("Congradulations you won!");
      return;
    } else {
      setScore(score + 1);
      setCardSelection([...prevCardSelection, cardImg]);
    }

    setIndexArr(setRandomIndexes());
  }

  function verifyUniqueCardSelection(string) {
    for (const index in prevCardSelection) {
      if (string === prevCardSelection[index]) {
        return false;
      }
    }

    return true;
  }
}

export default App;
