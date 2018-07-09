import React from 'react';
import './App.css';

const Group = ({ heading, items }) => {
  return(
    <div className="ListGroup">
      <h3 className="ListGroup-heading">
        {heading}
      </h3>
      <ul className="List">
        {
          items.map(i => {
            return (
              <li key={`list-${i.name}`}>
                <a className="List-link" href={i.website}>
                  {i.name}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

const App = ({ groups, compliment }) => {
  const NUMBER_OF_COLOR_SCHEMES = 1;
  let chosenScheme =  Math.floor(Math.random() * NUMBER_OF_COLOR_SCHEMES) + 1;
  let clas = `Main Main--scheme${chosenScheme}`;

  return (
    <div className={clas}>
      { groups.map(g => <Group key={`group-${g.heading}`} {...g} />) }

      <h1 className="Main-greeting">
        {compliment}
      </h1>
    </div>
  );
};

export default App;
