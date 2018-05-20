(() => {
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

  const generateCompliment = () => {
    let adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    let noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    let compliment = document.querySelector("#Compliment");
    compliment.innerHTML = `Have a wonderful day ${NAME}, you ${adjective} ${noun}!`;
  }

  const generateColors = () => {
    let main = document.querySelector("#Main");
    const NUMBER_OF_COLOR_SCHEMES = 2;
    let chosenScheme =  Math.floor(Math.random() * NUMBER_OF_COLOR_SCHEMES) + 1;
    main.classList.add(`Main--scheme${chosenScheme}`);
  }

  document.addEventListener('DOMContentLoaded', function() {
    generateColors();
    generateCompliment();
  }, false);
})();


