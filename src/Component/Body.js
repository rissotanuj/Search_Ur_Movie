import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";


export default function Body(props) {

  const [dataArray, setdataArray] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8b864d41bfmshcd4033872e1623cp1a8574jsncab4f7ee29f8",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

    const fetchFunction = async () => {
    const object = await fetch(
      `https://imdb8.p.rapidapi.com/auto-complete?q=${props.title}`,
      options
    );

    let arr = await object.json();
    console.log("THis is arr = ", arr);
    setdataArray(arr.d);

  };

  console.log("This is dataArya ", dataArray);

  useEffect(() => {
    // eslint-disable-next-line
    fetchFunction();
  },[props.click]);

  
  return (
    <div>
      <div className="text-center" style={{padding:"1rem"}}>
        <h2>List of your Movie</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {dataArray.map((element, index) => {
          return (
            <>
              {" "}
              <Card
                i={element.i?element.i:""}
                id={element.id}
                l={element.l}
                s={element.s}
                y={element.y}
              />{" "}
            </>
          );
        })}
      </div>
    </div>
  );
}
