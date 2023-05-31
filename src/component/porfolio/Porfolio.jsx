import React from "react";
import autom from "../../assets/autom.png";
import dashboard from "../../assets/dashboard.png";
import effect from "../../assets/effetc.gif";
import meteo from "../../assets/meteo.gif";
import javascript from "../../assets/javascript.png";
import blog from "../../assets/blog.png";
import "./Porfolio.css";

function Porfolio(props) {
  return (
    <section id="porfolio">
      <h5>My Recent work</h5>
      <h2>Porfolio</h2>

      <div className="container porfolio_container">
        <article className="porfolio_item">
          <img src={autom} alt="" />
          <div className="porfolio_item-image"></div>
          <h3>This is porfolio item title</h3>
          <div className="porfolio_item-cta">
            <a href="f" className="btn" target="_blank">
              Github
            </a>
            <a href="f" className="btn btn-primary" target="_blank">
              Live demo
            </a>
          </div>
        </article>
        <article className="porfolio_item">
          <img src={dashboard} alt="" />
          <div className="porfolio_item-image"></div>
          <h3>This is porfolio item title</h3>
          <div className="porfolio_item-cta">
            <a href="f" className="btn" target="_blank">
              Github
            </a>
            <a href="f" className="btn btn-primary" target="_blank">
              Live demo
            </a>
          </div>
        </article>
        <article className="porfolio_item">
          <img src={effect} alt="" />
          <div className="porfolio_item-image"></div>
          <h3>This is porfolio item title</h3>
          <div className="porfolio_item-cta">
            <a href="f" className="btn" target="_blank">
              Github
            </a>
            <a href="f" className="btn btn-primary" target="_blank">
              Live demo
            </a>
          </div>
        </article>
        <article className="porfolio_item">
          <img src={meteo} alt="" />
          <div className="porfolio_item-image"></div>
          <h3>This is porfolio item title</h3>
          <div className="porfolio_item-cta">
            <a href="f" className="btn" target="_blank">
              Github
            </a>
            <a href="f" className="btn btn-primary" target="_blank">
              Live demo
            </a>
          </div>
        </article>
        <article className="porfolio_item">
          <img src={blog} alt="" />
          <div className="porfolio_item-image"></div>
          <h3>This is porfolio item title</h3>
          <div className="porfolio_item-cta">
            <a href="f" className="btn" target="_blank">
              Github
            </a>
            <a href="f" className="btn btn-primary" target="_blank">
              Live demo
            </a>
          </div>
        </article>
        <article className="porfolio_item">
          <img src={javascript} alt="" />
          <div className="porfolio_item-image">
            <h3>This is porfolio item title</h3>
            <div className="porfolio_item-cta">
              <a href="f" className="btn" target="_blank">
                Github
              </a>
              <a href="f" className="btn btn-primary" target="_blank">
                Live demo
              </a>
            </div>
          </div>
        </article>
        <article className="porfolio_item">
          <img src={autom} alt="" />
          <div className="porfolio_item-image"></div>
          <h3>This is porfolio item title</h3>
          <div className="porfolio_item-cta">
            <a href="f" className="btn" target="_blank">
              Github
            </a>
            <a href="f" className="btn btn-primary" target="_blank">
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Porfolio;
