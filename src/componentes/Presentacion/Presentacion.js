import './Presentacion.css';
import img from '../../image/Cofesito.svg'

const Presentacion = () => {
    return (
        <aside className='container_presentation'>
            <section className='container_presentation--contenido'>
                <p>Hello! My name is<br /><br/> <strong>Soley Flores</strong><br /><br/> A UX/UI Designer enthusiastic about creating attractive
                    UI’s while finding the balance between impact and usability.</p>
            </section>
            <div className='container_presentation--svg'><img src={img} alt='error en cargar mi foto personal' /></div>
        </aside>
    )
}

export default Presentacion