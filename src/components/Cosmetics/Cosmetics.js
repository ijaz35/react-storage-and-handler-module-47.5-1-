import React from 'react';
import { add, multiply } from '../../utilities/calculate';
// import add from '../../utilities/calculate';
import './Cosmetics.css'

const Cosmetics = () => {
    const first = 120;
    const second = 100;
    const total = add(first, second);

    const num1 = 200;
    const num2 = 2;
    const result = multiply(num1, num2);
    console.log(result);
    return (
        <div className="cosmetics">
            <h2>My cosmetics compo</h2>
            <p>Total Price:{total} </p>
        </div>
    );
};

export default Cosmetics;