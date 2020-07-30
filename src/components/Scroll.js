import React from 'react';

function Scroll(props) {
    return (
        <div style={{border: "1px dashed black", overflowY: "scroll", height: "550px"}}>
            { props.children }       
        </div>
    )
}

export default Scroll;