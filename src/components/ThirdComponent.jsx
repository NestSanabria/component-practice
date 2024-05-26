import React from 'react';
import PropTypes from 'prop-types';

export const ThirdComponent = ({ name, lastName, card }) => {
  return (
    <div className="list-container">
      <hr />
      <h1>Comunicación entre Componentes</h1>
      <ul className="list">
        <li className="list-item">{name}</li>
        <li className="list-item">{lastName}</li>
        <li className="list-item">{card.height}</li>
        <li className="list-item">{card.bloodGroup}</li>
        <li className="list-item">{card.allergies}</li>
      </ul>
    </div>
  );
};

ThirdComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  card: PropTypes.object
};
