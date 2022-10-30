import "./Logo.css";
import React, { useRef, useState, useEffect } from "react";
function Logo(props) {
  let url = props.url;
  let name = props.name;
  const ref = useRef(null);
  const [textSize, setTextSize] = useState(20);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  useEffect(() => {
    if (ref.current) {

      let width = ref.current.offsetWidth;
      let text = ref.current.innerText;
      let fontSize = calculateFontSize(width, text, 60);
      setTextSize(fontSize);
    }
  }, [windowSize]);

  const imagetype = ["png", "jpg", "jpeg", "gif"];

  //check if string url includes imagetype
  if (url != undefined) {
    if (imagetype.some((type) => url.includes(type))) {
      return (
        <div className="container">
          <img className="image" src={url} />
        </div>
      );
    } else {
      if (url.includes("svg")) {
        return (
          <div className="container">
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
        <div className="image background" style={{ fontSize: textSize + "px" }}>
          {name}
        </div>
      </div>
    );
  }
}
function calculateFontSize(width, content,max) {
  //fit width
  var fontSize = Math.min(max,width / content.length);
  return fontSize;
}

export default Logo;
