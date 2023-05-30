import React from 'react';
import Moi from '../../assets/IMG_6299.png'
import {Code,People,Kanban} from 'react-bootstrap-icons'
import './About.css'


function About(props) {
    return (
        <section id='about'>
           <h5>Get to know</h5>
           <h2>About me</h2>
           <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me-image'>
                    <img src={Moi} alt='about-Imag'/>               
                </div>
            </div>

            <div className='about_content'>
                <div className="about_cards">

                    <article className='about_card'> 
                        <Code className='about_icon' color="royalblue" />
                        <h5>Experience</h5>
                        <small> 
                            +2 ans d'experiences
                        </small>
                    </article>

                    <article className='about_card'> 
                        <People className='about_icon' color="royalblue" />
                        <h5>Clients</h5>
                        <small> 
                            +10 clients
                        </small>
                    </article>

                    <article className='about_card'>
                    <Kanban className='about_icon' color="royalblue"/>
                        <h5>Projets</h5>
                        <small> 
                            +100 projets 
                        </small>
                    </article>
                </div>

                <p>
                    Je suis un développeur et concepteur passionné d'applications web et mobile.
                    Avec une solide formation universitaire en électronique, énergie électrique et automatique, je combine mes connaissances techniques avec ma créativité pour créer des expériences numériques innovantes. 
                    Que ce soit pour des projets de petite envergure ou des applications complexes, je m'engage à fournir des solutions sur mesure qui répondent aux besoins uniques de mes clients. 
                    Avec mon expertise en développement et mon attention aux détails, je transforme des idées en réalité fonctionnelle. 
                    Explorez mon portfolio pour découvrir mes réalisations et contactez-moi pour discuter de vos projets numériques !
                </p>

                <a href='#contact' className='btn btn-primary'>Discutons !!!</a>



            </div>
           </div>
        </section>
    );
}

export default About;