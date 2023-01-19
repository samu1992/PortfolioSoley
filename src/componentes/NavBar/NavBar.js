import './NavBar.css'
import logo from './LOGO.svg';
import { Link } from 'react-router-dom';


const NavBar = () => {
return (
    <header className='container_nav'>
        <div className="logo"><Link to='/'><img src={logo} alt='logo'/></Link></div>
        <div className='container_nav--links'>
            <ul>
                <li><Link to='/About'>About</Link></li>
                <li><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1o1LfwlJqLc9MGZOUiGuH__0fuJmxkCwQ/view?usp=sharing'>Resume</a></li>
                <li><a target="_blank" rel='noreferrer' href='http://www.linkedin.com/in/soleyflores'>LinkedIn</a></li>
            </ul>
        </div>
        <Link to='#' class="fa-solid fa-grip-lines lines"/>
        <div className='menu_responsive' id='responsive'>
                <Link  to='/About'>About</Link>
                <a href='.'>Resume</a>
                <a target="_blank" rel='noreferrer' href='http://www.linkedin.com/in/soleyflores'>LinkedIn</a>
            </div>
    </header>
)
}

export default NavBar