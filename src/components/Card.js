import React from 'react';
import 'tachyons';

function Card({id, name, email}) {
  return (
    <div key={id} className="bg-light-green dib br2 grow pa3 ma3">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"></img>
      <div>
        <h2 className="tc">{name}</h2>
        <p className="tc">{email}</p>
      </div>
    </div>
  );
}

export default Card;
