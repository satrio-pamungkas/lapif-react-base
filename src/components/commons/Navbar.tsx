import { useState } from 'react';
import Logo from '../../assets/img/logo.svg';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleNavbar = () => {
        setActive(!active);
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <ul className={`${active ? "slide" : ""}`}>
                <li><a href="pengaduan.html">PENGADUAN</a></li>
                <li><a href="aspirasi.html">ASPIRASI</a></li>
                <li><a href="#">FORUM</a></li>
                <li style={{ float: 'right' }}>
                    <button>MASUK</button>
                </li>
            </ul>
            <div className="menu-toggle" style={{ float: 'right', marginRight: '20px' }}>
                <input onClick={handleNavbar} type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}