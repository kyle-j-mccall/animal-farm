import './Animal.css';

export default function Animal({ animal }) {
  return <>
    <div className='animal' style={{ left: animal.left, top: animal.top }}>
      <p className='name'>{animal.name}</p>
      <p>{animal.type}</p>
      <p>{animal.says}</p>
      <img src={`${process.env.PUBLIC_URL}/animals/${animal.type}.svg`}/>
    </div>
  </>;
}
