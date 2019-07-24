import React from 'react';
import BodyDiv1 from './BodyDiv1/BodyDiv1';
import './MyBody.css';

function MyBody() {
        return(
            <div className="MyBody">
                <h1>This is my body.</h1>
                <p>I have a great body!</p>
                <BodyDiv1 />
            </div>
        );
}

export default MyBody;