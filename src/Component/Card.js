import React from "react";


export default function Card(props) {

  let image;
  if(props.i.hasOwnProperty('imageUrl')){
   image = props.i.imageUrl;
  }
  else{
        image = "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
  }

  // style={{width:"30em",height: "25em",marginLeft:"6em"}} 
  return (
    <div className="col">
    <div className="card">
      <img src = {image} className="card-img-top text-center" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Title: {props.l}</h5>
        <p className="card-text">Cast: {props.s}</p>
        <span>year: {props.y}</span>
      </div>
    </div>
  </div>
  );
}
