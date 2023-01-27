import './About.css'
import me from '../../image/ProfilePhoto.png';
import me1 from '../../image/ProfilePhoto2.png';
import flores from '../../image/Flores.png';
import pino from '../../image/Pino.png';
import menta from '../../image/Menta.png';

const About = () => {
    return (
        <main className='container_about'>
            <section className='container_about--p1 parrafo'>
                <img src={me} alt='error en cargar mi foto (soley-flores)' />
                <p><strong>Soley Flores</strong> is a Venezuelan UX/UI Designer based in Buenos Aires,
                    Argentina, and, yes, she does have an accent (according to her friends) that still hasn't
                    stopped her from speaking English.</p>
            </section>
            <section className='container_about--p2 parrafo'>
                <p>Soley would describe herself as a creative, driven, and highly motivated individual with a
                    strong passion for designing beautiful UIs and user experiences. Her experience ranges from
                    being a spinning instructor, serving at restaurants, providing customer services, and designing
                    graphics for a friend's brand. All these experiences allowed her to diversify her outlook, build
                    more empathy toward users and pay attention to details.</p>
                <img src={me1} alt='error en cargar mi foto (soley-flores)' />
            </section>
            <section className='container_about--p3 parrafo'>
                <p> As a UX/UI Designer, she has a solid understanding of the design process, including research, wireframing,
                    prototyping, and user testing. She believes that creating user-centered designs will solve real problems
                    improving the user experience and enhancing the overall aesthetic appeal of the product. Above all,
                    Soley has a keen eye for details, and she takes pride in her ability to create visually compelling
                    designs that are intuitive, easy to use, and accessible.</p>
            </section>
            <section className='container_about--p4 parrafo'>
                <img src={pino} alt='error en cargar la foto de mi perro' />
                <img src={flores} alt='error en cargar imagen de flores' />
                <img src={menta} alt='error en cargar la foto de mi perro' />
            </section>
            <section className='container_about--p5 parrafo'>
                <h4>Fun facts!</h4>
                <ul>
                    <li>Outside design, you can find her walking her dog Pino, and he's not shy to ask you to pet him.</li>
                    <li>Soley loves to explore new things on Pinterest.</li>
                    <li>She is obsessed with greyhounds and decided to volunteer to be a foster home.</li>
                </ul>
            </section>
            <section className='container_about--p5 parrafo'>
                <p>Soley is always looking to challenge herself and take on new projects. She is open to feedback
                    and enjoys working in a collaborative environment.<br /><br/><strong>Feel free to contact her. Thanks for coming over!</strong></p>
            </section>
        </main>
    )
}

export default About