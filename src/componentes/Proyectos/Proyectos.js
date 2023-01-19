import './Proyectos.css';
import canil from './Canil.svg';
import petxi from './Petxi.svg';
import imdb from './IMDb.svg';
import dd from './DD.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Proyectos = () => {
    AOS.init();
    return (
        <div className="container_proyectos">
            <div data-aos="zoom-in-down" className='container_proyectos--column'>
                <div id='canil' className="proyectos"><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1kRWn9gdBsPfIC3n1e4TIxRBRKbWmCr3h/view?usp=sharing'><img alt='img' src={canil} /></a></div>
                <p><strong>Canil</strong><br />A branding of a pet friendly coffee shop</p>
            </div>
            <div data-aos="zoom-in-down" className='container_proyectos--column'>
                <div  id='petxi' className="proyectos"><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1OnuMH351PW4RUIOvaO4kwAZjY90qvVe_/view?usp=share_link'><img alt='img' src={petxi} /></a></div>
                <p><strong>Petxi</strong><br />A mobile app for transportation services with pets.<br /><a target='_blank' rel="noreferrer" href='https://www.figma.com/proto/tFyHbE6uJt1QIabLNTBqMa/Patrones---Flores?page-id=1087%3A19972&node-id=1087%3A22314&starting-point-node-id=1087%3A22780&scaling=scale-down'>Check prototype ↗</a></p>
            </div>
            <div data-aos="zoom-in-down" className='container_proyectos--column'>
                <div id='imdb' className="proyectos"><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1VRA8hdFra7eYO4sNt28VLnsa_Xmg_0kD/view?usp=share_link'><img alt='img' src={imdb} /></a></div>
                <p><strong>IMDb</strong><br />A redesign proposal for the IMDb website.<br /><a target='_blank' rel="noreferrer" href='https://www.figma.com/proto/V6IYAAEmjAMT78lkNetwwV/Redise%C3%B1o-IMDb?page-id=933%3A6514&node-id=933%3A6516&viewport=290%2C228%2C0.04&scaling=scale-down&starting-point-node-id=933%3A6516'>Check prototype ↗</a></p>
            </div>
            <div data-aos="zoom-in-down" id='dd' className='container_proyectos--column'>
                <div className="detox"><img alt='img' src={dd} /></div>
                <p><strong>Digita Detox app</strong><br />Design System, coming soon.<br /></p>
            </div>
        </div>
    )
}

export default Proyectos