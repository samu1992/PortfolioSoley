import canil from '../../image/Canil.svg';
import petxi from '../../image/Petxi.svg';
import imdb from '../../image/IMDb.svg';
import dd from '../../image/DD.svg';
import petxiPdf from '../../image/Petxi.pdf';
import canilPdf from '../../image/Canil.pdf';
import imdbPdf from '../../image/IMDb.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Proyectos.css';

const Proyectos = () => {
    AOS.init();
    return (
        <main className="container_proyectos">
            <article data-aos="zoom-in-down" className='container_proyectos--column'>
                <div id='canil' className="proyectos"><a target='_blank' rel='noreferrer' href={canilPdf}><img alt='error en cargar portada del proyecto CANIL' src={canil} /></a></div>
                <p><strong>Canil</strong></p>
                <p>A branding of a pet friendly coffee shop</p>
            </article>
            <article data-aos="zoom-in-down" className='container_proyectos--column'>
                <div  id='petxi' className="proyectos"><a target='_blank' rel='noreferrer' href={petxiPdf}><img alt='error en cargar portada del proyecto PETXI' src={petxi} /></a></div>
                <p><strong>Petxi</strong></p>
                <a target='_blank' rel="noreferrer" href='https://www.figma.com/proto/tFyHbE6uJt1QIabLNTBqMa/Patrones---Flores?page-id=1087%3A19972&node-id=1087%3A22314&starting-point-node-id=1087%3A22780&scaling=scale-down'>Check prototype ↗</a>
                <p>A mobile app for transportation services with pets.</p>
            </article>
            <article data-aos="zoom-in-down" className='container_proyectos--column'>
                <div id='imdb' className="proyectos"><a target='_blank' rel='noreferrer' href={imdbPdf}><img alt='error en cargar portada del proyecto IMDB' src={imdb} /></a></div>
                <p><strong>IMDb</strong></p>
                <a target='_blank' rel="noreferrer" href='https://www.figma.com/proto/V6IYAAEmjAMT78lkNetwwV/Redise%C3%B1o-IMDb?page-id=933%3A6514&node-id=933%3A6516&viewport=290%2C228%2C0.04&scaling=scale-down&starting-point-node-id=933%3A6516'>Check prototype ↗</a>
                <p>A redesign proposal for the IMDb website.</p>
            </article>
            <article data-aos="zoom-in-down" id='dd' className='container_proyectos--column'>
                <div className="proyectos"><a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1T6EacQN9HjDfXCLLoyzWPTCuExNaqjhm/view?usp=share_link'><img alt='img' src={dd} /></a></div>
                <p><strong>Digita Detox app</strong></p>
                <p>Design System.</p>
            </article>
        </main>
    )
}

export default Proyectos