import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as config from './config.json';

const generateCompliment = () => {
  const NAME = "Randeep";

  const ADJECTIVES = [
    "beautiful", "sophisticated", "poetic", "noble",
    "talented", "brilliant", "powerful", "perfect",
    "cunning", "chestnut-haired", "thoughtful",
    "kind", "rule-breaking", "glowing", "sweet",
    "innocent", "pretty", "amazing", "opalescent",
    "rainbow infused", " beautiful, naive", "cunning",
    "tricky", "sassy",
  ];

  const NOUNS = [
    "newborn baby", "land mermaid", "musk ox",
    "sunflower", "unicorn nurse", "spinster",
    "sunfish", "sun goddess", "tropical fish",
    "tree shark", "space unicorn", "mannequin",
  ];

  let adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  let noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `Have a wonderful day ${NAME}, you ${adjective} ${noun}!`;
}

ReactDOM.render(
  <App {...config} compliment={generateCompliment()} />,
  document.getElementById('root')
);

