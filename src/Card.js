import React from 'react';
import 'tachyons';

function Card({id, name, email}) {
  return (
    <div className="bg-light-green dib br4 grow pa2 ma2">
      <img src={`https://robohash.org/${id}`} alt="robot"></img>
      <div>
        <h1 className="tc">{name}</h1>
        <p className="tc">{email}</p>
      </div>
    </div>
  );
}

export default Card;
