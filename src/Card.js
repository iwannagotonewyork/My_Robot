import React from 'react';
import 'tachyons';

function Card({id, name, email}) {
  return (
    <div key={id} className="bg-light-green dib br4 grow pa2 ma3">
      <img src={`https://robohash.org/${id}`} alt="robot"></img>
      <div>
        <h2 className="tc">{name}</h2>
        <p className="tc">{email}</p>
      </div>
    </div>
  );
}

export default Card;
