import './NavBar.css'
import { useState } from 'react';
import logo from '../../image/logo.svg';
import { Link } from 'react-router-dom';
import resume from './soleyflores.pdf'


const NavBar = () => {
const [menuOpen, setMenuOpen] = useState(false);
return (
    <header className='container_nav'>
        <div className="logo"><Link to='/'><img src={logo} alt='error en cargar el logo de mi portfolio'/></Link></div>
        <nav className='container_nav--links'>
            <ul>
                <li><Link to='/About'>About</Link></li>
                <li><a target='_blank' rel='noreferrer' href={resume}>Resume</a></li>
                <li><a target="_blank" rel='noreferrer' href='http://www.linkedin.com/in/soleyflores'>LinkedIn</a></li>
            </ul>
        </nav>
        <Link to='#' className="fa-solid fa-grip-lines lines" onClick={() => setMenuOpen(!menuOpen)}/>
        <nav className={`navbar--responsive ${menuOpen ? 'navbar--open' : 'navbar--closed'}`}>
                <Link  to='/About'>About</Link>
                <a target='_blank' rel='noreferrer' href={resume}>Resume</a>
                <a target="_blank" rel='noreferrer' href='http://www.linkedin.com/in/soleyflores'>LinkedIn</a>
            </nav>
    </header>
)
}

export default NavBar