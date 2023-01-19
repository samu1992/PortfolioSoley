import './Presentacion.css';
import img from './Cofesito.svg'

const Presentacion = () => {
    return (
        <div className='container_presentation'>
            <div className='container_presentation--contenido'>
                <p>Hello! My name is<br /><br/> <strong>Soley Flores</strong><br /><br/> A UX/UI Designer enthusiastic about creating attractive
                    UI’s while finding the balance between impact and usability.</p>
            </div>
            <div className='container_presentation--svg'><img src={img} alt='img' /></div>
        </div>
    )
}

export default Presentacion