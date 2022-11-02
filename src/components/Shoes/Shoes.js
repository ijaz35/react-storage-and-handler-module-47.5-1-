import React from 'react';
import { add } from '../../utilities/calculate';

const Shoes = () => {
    const first = 123;
    const second = 100;
    const total = add(first, second);
    return (
        <div>
            <h3>This is shoes compo</h3>
            <p>Total:{total}</p>
        </div>
    );
};

export default Shoes;