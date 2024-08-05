import React from 'react';
import './Product.css';
import Price from './Price';

export default function Product({ title , description, indx}) {
    const oldPrice = [100, 200, 300, 400];
    const newPrice = [90, 180, 270, 360];
    return (
        <div className='flex flex-col items-center justify-center m-2.5 p-2.5 border border-gray-300 rounded-lg w-[300px]'>
            <h3>{title}</h3>
            <p>{description[0]}</p>
            <p>{description[1]}</p>
            <Price oldPrice={oldPrice[indx]} newPrice={newPrice[indx]} /> 
        </div>
    );
};
