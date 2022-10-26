import "./Logo.css";
import React, { useRef, useState, useEffect } from "react";
function Logo(props) {
  let url = props.url;
  let name = props.name;
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if(ref.current != undefined){
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);

    // 👇️ if you need access to parent
    // of the element on which you set the ref
    }}, []);

  const imagetype = ["png", "jpg", "jpeg", "gif"];

  //check if string url includes imagetype
  if (url != undefined) {
    if (imagetype.some((type) => url.includes(type))) {
      return (
        <div className="container" ref={ref} >
          <img className="image" src={url} />
        </div>
      );
    } else {
      if (url.includes("svg")) {
        return (
          <div className="container" ref={ref}>
            <div className="image background">
              <img className="svg" src={url} />
            </div>
          </div>
        );
      }
    }
  } else {
    return (
      <div className="container" ref={ref}>
        <div className="image background">
          <svg
            className="text_fit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <text
              className="text"
            x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
            >
              {name}
            </text>
          </svg>
        </div>
      </div>
    );
  }
}
export default Logo;
