import React from "react";
import './comics.css';
import Avengers from "../../img/avengers.jpg";
import Xmen from "../../img/xmen.jpg";
import Fantastic from "../../img/4fantastic.jpg";
import LogoAvengers from "../../img/logo avengers.png";

const Comics = () => {
  return (
    <div className="row comics g-0">
      <div className="col-md-6 g-3">
      <div class="card mb-3">
  <div class="row">
    <div class="col-md-4">
      <img src={Avengers} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title"><img src={LogoAvengers} alt="" className="w-75" /></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3">
  <div class="row">
    <div class="col-md-4">
      <img src={Xmen} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="col-md-6 g-3">
      <div class="card mb-3">
  <div class="row">
    <div class="col-md-4">
      <img src={Fantastic} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Comics;
