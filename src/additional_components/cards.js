import React from 'react';

const Card = ({ title, description }) => {

    const truncatedDescription = description && description.slice(0, 80);

    return (
        <>
            <h2 className='text-base'>{title}</h2>
            <p className='text-xs mt-3'>{truncatedDescription + "..."}</p>
        </>

    );
};

export default Card;