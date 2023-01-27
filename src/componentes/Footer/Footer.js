import './Footer.css';
import Logo from '../Logo/Logo'

const Footer = () => {
    return (
        <footer className='container_footer'>
            <section className='container_footer--title'><h2>Get in touch</h2></section>
            <div className='container_footer--email'><a  href="mailto:soleyflores.ar@gmail.com">soleyflores.ar@gmail.com ↗</a></div>
            <section className='container_footer--redes'>
                <div><a target="_blank" rel='noreferrer' href="http://www.linkedin.com/in/soleyflores"><i className=" fab fa-linkedin"></i></a></div>
                <div><a target="_blank" rel='noreferrer' href="https://www.behance.net/soleyflores"><i className=" fab fa-behance"></i></a></div>
                <div><a target="_blank" rel='noreferrer' href="https://www.instagram.com/baxs_20/"><i className=" fab fa-instagram"></i></a></div>
            </section>
            <div className='container_footer-logo'><Logo/></div>
        </footer>
    )
}

export default Footer