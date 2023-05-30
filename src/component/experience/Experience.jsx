import React from "react";
// import {checkmark} from 'react-bootstrap-icons';
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Exxperience.css";

function Experience(props) {
  return (
    <section id="experience">
      <h5>What Skills i Have</h5>
      <h2>Mon experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Developpement Frontend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Avancé</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Avancé</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Avancé</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">intermédiaire</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>VueJs</h4>
                <small className="text-light">intermédiaire</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>bootstrap</h4>
                <small className="text-light">intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Developpement Backend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Debutant</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">debutant</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Debutant</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
