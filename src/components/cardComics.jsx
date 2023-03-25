import React from 'react';
import '../pages/comics/comics.css'

const CardComics = ({link,imgComic, imgTitle, text}) => {
    return (
        <div className="row">
            <div className="col-md-4">
      <img src={imgComic} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h5 className="card-title"> <a href={link}><img src={imgTitle} alt="" className="w-75" /></a> </h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
        </div>
    );
}

export default CardComics;
