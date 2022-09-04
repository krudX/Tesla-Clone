import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as TeslaLogo } from '../../assets/images/tesla_logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/close.svg';


import './navigation.styles.scss'

export const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        // 👇️ toggle
        setIsMenuOpen(current => !current);

        // 👇️ or set to true
        // setIsActive(true);
    };


    return (
        <Fragment>
            <header>

               <div className='container header-container'>
                    <div className='nav-logo'>
                        <Link to='/'>
                            <TeslaLogo className="logo" />
                        </Link>
                    </div>
                    <div className="nav-menu">
                        <ul className="menu-items">
                            <li className="menu-item hide_on_mobile"><Link to="/#model-s">Model S</Link></li>
                            <li className="menu-item hide_on_mobile"><Link to="/#model-3">Model 3</Link></li>
                            <li className="menu-item hide_on_mobile"><Link to="/#model-x">Model X</Link></li>
                            <li className="menu-item hide_on_mobile"><Link to="/#model-y">Model Y</Link></li>
                            <li className="menu-item hide_on_mobile"><Link to="/#solar-roof">Solar Roof</Link></li>
                            <li className="menu-item hide_on_mobile"><Link to="/#solar-panels">Solar Panels</Link></li>
                            
                        </ul>
                    </div>
                    <div className="other-menu">
                        <ul className="menu-items">
                            <li className="menu-item hide_on_mobile"><Link to="/">Shop</Link></li>
                            <li className="menu-item hide_on_mobile"><Link to="/">Account</Link></li>
                            <li className="menu-item"><Link to="/#" onClick={handleMenu} id="menu-btn">Menu</Link></li>
                        </ul>
                    </div>
               </div>
               <div className="menu-overlay" id="menu-overlay"
               style={{
                    display: !isMenuOpen ? 'none' : 'block',
                }}
               ></div>
                <div className="aside-menu" id="aside-menu"   
                style={{
                    right: !isMenuOpen ? '-300px' : '0%',
                }}
                >
                    <div className="menu-close" id="menu-close"><CloseIcon onClick={handleMenu} className='close-icon' /></div>
                    <ul className="menu-items">
                        <li className="menu-item hide_on_desktop"><Link to="/#model-s">Model S</Link></li>
                        <li className="menu-item hide_on_desktop"><Link to="/#model-3">Model 3</Link></li>
                        <li className="menu-item hide_on_desktop"><Link to="/#model-x">Model X</Link></li>
                        <li className="menu-item hide_on_desktop"><Link to="/#model-y">Model Y</Link></li>
                        <li className="menu-item hide_on_desktop"><Link to="/#solar-roof">Solar Roof</Link></li>
                        <li className="menu-item hide_on_desktop"><Link to="/#solar-panels">Solar Panels</Link></li>
                        <li className="menu-item"><Link to="/">Existing Inventory</Link></li>
                        <li className="menu-item"><Link to="/">Used Inventory</Link></li>
                        <li className="menu-item"><Link to="/">Trade-In</Link></li>
                        <li className="menu-item"><Link to="/">Test Drive</Link></li>
                        <li className="menu-item"><Link to="/">Insurance</Link></li>
                        <li className="menu-item"><Link to="/">Cybertruck</Link></li>
                        <li className="menu-item"><Link to="/">Roadster</Link></li>
                        <li className="menu-item"><Link to="/">Semi</Link></li>
                        <li className="menu-item"><Link to="/">Charging</Link></li>
                        <li className="menu-item"><Link to="/">Powerwall</Link></li>
                        <li className="menu-item"><Link to="/">Commercial Energy</Link></li>
                        <li className="menu-item"><Link to="/">Utilities</Link></li>
                        <li className="menu-item"><Link to="/">Find Us</Link></li>
                        <li className="menu-item"><Link to="/">Support</Link></li>
                        <li className="menu-item"><Link to="/">Investore Relations</Link></li>
                    </ul>
                </div>

            </header>

            <Outlet />
        </Fragment>
    )
}