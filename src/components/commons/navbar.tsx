import Logo from '../../assets/img/logo.svg';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <ul>
                <li><a href="pengaduan.html">PENGADUAN</a></li>
                <li><a href="aspirasi.html">ASPIRASI</a></li>
                <li><a href="#">FORUM</a></li>
                <li style={{ float: 'right' }}>
                    <button>MASUK</button>
                </li>
            </ul>
            <div className="menu-toggle" style={{ float: 'right', marginRight: '20px' }}>
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}