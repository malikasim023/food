import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const CarouselDetail = ({ Logo, Title, Description }) => {
    const stars = Array(4).fill(faStar); // Create an array of length 4 filled with faStar

    return (
        <>
            <div className=' text-black items-center gap-4 text-center'>
                <div className='grid justify-center items-center'><img src={Logo} alt="" className='rounded-full h-24 w-24 object-center' /></div>
                <h3 className='my-1 font-bold text-2xl'>{Title}</h3>
                <p>{Description}</p>
                <div className='flex justify-center'>
                    {stars.map((star, index) => (
                        <FontAwesomeIcon key={index} icon={star} className="text-yellow-500 text-2xl mt-1" />
                    ))}
                    <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500 text-2xl mt-1"/>
                </div>
            </div>
        </>
    );
};

export default CarouselDetail;
