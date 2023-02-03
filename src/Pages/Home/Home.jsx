import React from "react";
import { Link } from "react-router-dom";
import Letters from "../../Components/Letters/Letters";
import "./Style.css";

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <Letters title={"Hi, I'm Jakhongir, Web developer"} />
        <p className="home-subtitle">Frontend developer | Teacher</p>
        <button class="button-92" role="button">
          <Link to="/contact">Contact me</Link>
        </button>
        <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
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

        <div className="home-gallery">
          <div className="img-wrap">
            <a
              href="https://jakhongiralijonov.github.io/weather/"
              target={"_blank"}
            >
              <img src="../../../public/1.png" alt="" />
            </a>
          </div>
          <div className="img-wrap">
          <a
              href="https://jakhongiralijonov.github.io/Github-user-finder/"
              target={"_blank"}
            >
              <img src="../../../public/2.jpeg" alt="" width={"250"} height="250" />
            </a>
          </div>
          <div className="img-wrap">
          <a
              href="https://memory-game-react-jakh.netlify.app/"
              target={"_blank"}
            >
              <img src="../../../public/3.png" alt=""  />
            </a>
          </div>
          <div className="img-wrap">
          <a
              href="https://gradient-generator-ja.netlify.app/"
              target={"_blank"}
            >
              <img src="../../../public/4.png" alt=""  />
            </a>
          </div>
          <div className="img-wrap">
          <a
              href="https://jakhongiralijonov.github.io/Music-player/"
              target={"_blank"}
            >
              <img src="../../../public/5.png" alt=""  />
            </a>
          </div>
          <div className="img-wrap">
          <a
              href="https://jakhongiralijonov.github.io/Responsive-sushi-website/"
              target={"_blank"}
            >
              <img src="../../../public/6.png" alt=""  />
            </a>
          </div>
          <div className="img-wrap">
          
          <a
              href="https://guess-my-num-ja.netlify.app/"
              target={"_blank"}
            >
              <img src="../../../public/7.png" alt=""  />
            </a>
          </div>
          <div className="img-wrap">
          <a
              href="https://imdb-clone-ja.netlify.app/"
              target={"_blank"}
            >
              <img src="../../../public/8.png" alt=""  />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
