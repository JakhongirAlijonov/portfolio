import React from "react";

function Gallery() {
  const galleryDetails = [
    {
      id: 1,
      link: "https://jakhongiralijonov.github.io/weather/",
      image: "/public/1.png",
    },
    {
      id: 2,
      link: "https://jakhongiralijonov.github.io/Github-user-finder",
      image: "/public/2.png",
    },
    {
      id: 3,
      link: "https://memory-game-react-jakh.netlify.app/",
      image: "/public/3.png",
    },
    {
      id: 4,
      link: "https://gradient-generator-ja.netlify.app/",
      image: "/public/4.png",
    },
    {
      id: 5,
      link: "https://jakhongiralijonov.github.io/Music-player/",
      image: "/public/5.png",
    },
    {
      id: 6,
      link: "https://jakhongiralijonov.github.io/Responsive-sushi-website/",
      image: "/public/6.png",
    },
    {
      id: 7,
      link: "https://guess-my-num-ja.netlify.app/",
      image: "/public/7.png",
    },
    {
      id: 8,
      link: "https://imdb-clone-ja.netlify.app/",
      image: "/public/8.png",
    },
  ];
  return <div className="home-gallery">
    {
      galleryDetails.map((img)=>{
        return(
          <a href={img.link} key={img.id}>
            <img src={img.image}  alt={img.link} width="250" height="250" />
          </a>
        )
      })
    }
  </div>;
}

export default Gallery;
