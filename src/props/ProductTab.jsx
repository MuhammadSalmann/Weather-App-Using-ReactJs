import React from 'react';
import Product from "./Product";

const ProductTab = () => {
    const descrip = [['For 1', 'For 1.2'], ['For 2', 'For 2.2'], ['For 3', 'For 3.4'], ['For 4', 'For 4.4']];
    return (
        <div className="flex flex-row">
            <Product title='Product 1' description={descrip[0]} indx={0} />
            <Product title='Product 2' description={descrip[1]} indx={1} />
            <Product title='Product 3' description={descrip[2]} indx={2} />
            <Product title='Product 3' description={descrip[3]} indx={3} />
        </div>
    );
};

export default ProductTab;
