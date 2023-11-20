// Footer.js
import React from 'react';

function Footer(props) {
    return (
        <div>
        <div className='footer'> 
        <h1>{props.myf}</h1>
            <p>Copyright © 2023 My JSX App</p>
            <p>Design</p>
        </div>
        </div>
    );
}

export default Footer;
