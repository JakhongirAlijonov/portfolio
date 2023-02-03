import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../../Components/HomeGallery/Gallery";
import Letters from "../../Components/Letters/Letters";
import "./Style.css";

function Home() {
  const starArr = []
  
    for(let i=0;i<50;i++){
      
       starArr.push(<div key={Math.random()} className="star"></div>)
      
  }
  return (
    <div className="home">
      <section className="hero-section">
        <Letters title={"Hi, I'm Jakhongir, Web developer"} />
        <p className="home-subtitle">Frontend developer | Teacher</p>
        <button className="button-92" role="button">
          <Link to="/contact">Contact me</Link>
        </button>
        <div className="stars">
          {starArr.map(star=>  star)}
        </div>
      </section>
      <section className="home-portfolio">
        <Letters title={"My portfolio"} />
        <p className="home-portfolio-info">
          These are the projects I have chosen from among those created by me.
          This is still a drop from the sea. Projects created while learning and
          serves to demonstrate my programming skills. Are you interested in
          seeing these things? You can see <Link to="/work"> here</Link>
        </p>

        <Gallery/>
      </section>
    </div>
  );
}

export default Home;
