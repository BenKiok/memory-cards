function Card(props) {
  return (
    <div className='card' onClick={props.handler}>
      <img src={props.src || 'https://bit.ly/2MUJQKL'} alt='?'/>
    </div>
  );
}

export default Card;