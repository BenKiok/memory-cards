function Congrats(props) {
  return (
    <div id='congrats'>
      <h1>Congradulations! You win!</h1>
      <img src='https://bit.ly/3qKSh9l'/>
      <button onClick={props.func}>Play Again</button>
    </div>
  );
}

export default Congrats;