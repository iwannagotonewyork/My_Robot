import React from 'react';


function Searchbox({ changeInput }) {
    return (
        <input 
            className="b--green ba bg-lightest-blue ma3 pa3" 
            type="search" 
            placeholder="search your robots"
            onChange={changeInput}
        >
        </input>
    )
}

export default Searchbox;