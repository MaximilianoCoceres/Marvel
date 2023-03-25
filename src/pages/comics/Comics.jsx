import React from "react";
import "./comics.css";
import Avengers from "../../img/avengers.jpg";
import Xmen from "../../img/xmen.jpg";
import Fantastic from "../../img/4fantastic.jpg";
import LogoAvengers from "../../img/logo avengers.png";
import LogoXmen from "../../img/X-Men-Logo-1968.png";
import Logo4fantastic from "../../img/Fantastic-Four-Logo.png";
import CardComics from "../../components/cardComics";

const Comics = () => {
  return (
    <div className="row comics g-0" id="comics">
      <div className="col-md-6 g-3">
        <div className=" card__container mb-3">
          <CardComics
            link={"#"}
            imgComic={Avengers}
            imgTitle={LogoAvengers}
            text="texto de avengers"
          />
        </div>

        <div className="card__container mb-3">
          <CardComics
            link={"#"}
            imgComic={Xmen}
            imgTitle={LogoXmen}
            text="texto de xmen"
          />
        </div>
      </div>
      <div className="col-md-6 g-3">
        <div className="card__container mb-3">
          <CardComics
            link={"#"}
            imgComic={Fantastic}
            imgTitle={Logo4fantastic}
            text="texto de 4fantastic"
          />
        </div>
        <div className="card__container mb-3">
          <CardComics
            link={"#"}
            imgComic={Fantastic}
            imgTitle={Logo4fantastic}
            text="texto de 4fantastic"
          />
        </div>
      </div>
    </div>
  );
};

export default Comics;
