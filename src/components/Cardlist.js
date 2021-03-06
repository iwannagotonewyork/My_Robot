import React from 'react';
import Card from './Card';

function Cardlist( { robots }) {
    return (
        <div className="Cardlist">
            {
                robots.map((robot, index) => (
                    <Card
                     key={index}
                     id={robot.id}
                     name={robot.name}
                     email={robot.email}
                     />
                ))
            }
        </div>
    )
}

export default Cardlist;