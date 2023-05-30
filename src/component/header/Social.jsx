import React from 'react';
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

function Social(props) {
    return (
        <div className='header_socials'>
            <a href='https://linkedin.com/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href='https://github.com/mohametBa' target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><BsInstagram/></a>
        </div>
    );
}

export default Social;