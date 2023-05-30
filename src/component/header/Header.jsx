import React from 'react';
import Debat from './Debat'
import momo from '../../assets/momo.png'
// import Avatar from '../../assets/peeps-avatar-alpha.png'
import Social from './Social';
import './Header.css'

function Header(props) {
    return (
        <header>
            <div className="header_container">
                <h5>Hello moi c'est</h5>
                <h1>Mohamet Ba</h1>
                <h5 className="text-light">Developpeur d'application Web-Mobile</h5>
                <Debat />
                <Social />

                <div className="avatar">
                    <img src={momo} alt="avatar" />
                </div>

                <a href='#contact' className='scroll_down'>Scroll</a>
            </div>

        </header>
    );
}

export default Header;