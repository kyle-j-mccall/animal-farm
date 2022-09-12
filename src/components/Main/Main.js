import React from 'react';
import './Main.css';
import background from '../../background.png';
import Animal from '../Animal/Animal';
import { animals } from '../../data';



export default function Main() {
  return <main style = {{ backgroundImage: `url(${background})` }}>
    {animals.map((animal) => (
      <Animal key={animal.name} animal={animal}/>
    ))}
  </main>;
}
