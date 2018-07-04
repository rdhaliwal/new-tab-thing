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


(() => {
  const readConfig = () => {
    return new Promise((resolve, reject) => {
      chrome.runtime.getPackageDirectoryEntry((root) => {
        const errorHandler = (e) => {
          console.log(e);
          reject(e);
        }; 

        root.getFile("scripts/config.json", {}, (fileEntry) => {
          fileEntry.file((file) => {
            var reader = new FileReader();
            reader.onloadend = function(e) {
              resolve(JSON.parse(this.result)); 
            };
            reader.readAsText(file);
          }, errorHandler);
        }, errorHandler);
      }); 
    })  
  }

  document.addEventListener('DOMContentLoaded', async () => {
    window.config = await readConfig();
  }, false);
})();


