import React from 'react';
// import {Link} from 'react-router-dom'
import CV from '../../assets/cv maj.pdf'



function Debat(props) {
    return (
        <div className='debat' >
            <a href= {CV} download className='btn'>Download</a>
            <a href="#contact" className='btn btn-primary'>Ecrivez moi</a>


        </div>
    );
}

export default Debat;