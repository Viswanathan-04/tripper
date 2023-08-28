import './header.css';

function Header()
{
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <a href='/' className="logo-text"><span className="logo-text-span">T</span>rippe<span className="logo-text-span">r</span></a>
                </div>
                <div className='links'>
                    <ul>
                        <li>
                            <a href='/' id='head-a' >Home</a>
                            <a href='/' id='head-a'>About</a>
                            <a href='/' id='head-a'>Services</a>
                            <a href='/' id='head-a'>Explore</a>
                            <a href='/' id='head-a'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='search'>
                    <a className='login-btn' href='/'>Login</a>
                </div>
            </div>
        </>
    )
}

export default Header;