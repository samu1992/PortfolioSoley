import logo from '../../image/logo.svg';
import './Logo.css';

const Logo = () => {
    return (
        <section className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </section>
    )
}

export default Logo