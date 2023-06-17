import React from 'react';
import QZoon1 from '../../../assets/qZone1.png';
import QZoon2 from '../../../assets/qZone2.png';
import QZoon3 from '../../../assets/qZone3.png';

const QZoon = () => {
    return (
        <div className='bg-secondary text-center my-4 py-4'>
            <h4>Q-Zoon</h4>
            <img src={QZoon1} alt="" />
            <img src={QZoon2} alt="" />
            <img src={QZoon3} alt="" />
            
        </div>
    );
};

export default QZoon;