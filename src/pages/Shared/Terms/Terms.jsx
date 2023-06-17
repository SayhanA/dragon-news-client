import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium ex ipsum temporibus consectetur ab fuga ea atque, officia repellendus et hic voluptates voluptatem totam nisi velit a. Amet, dolor.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;