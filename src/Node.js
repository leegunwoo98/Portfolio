import React, { useRef, useState, useEffect } from "react";
//import style sheet named Node.css
import "./Node.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Logo from "./Logo.js";


// Create a class that recieves props named name and image
function Node(props) {
  //create a constructor
  // constructor(props) {
  //   super(props);
  //   state = {
  //     clicked: {},
  //     mounted: false,
  //   };
  //   // bind the handleClick function to the class
  //   handleClick = handleClick.bind(this);
  //   children = children.bind(this);
  //   ref = React.createRef();
  // }
  const [clicked, setClicked] = useState(0);
  const [mounted, setMounted] = useState(1);
  const ref = useRef(null);

  const handleClick = (key) => {
    if (key === clicked) {
      setClicked({});
    } else {
      setClicked(key);
    }
  };

  const children = () => {
    console.log("hello")
    if (props.clicked && props.data.children != undefined && mounted) {
      return (
        <div className="children">
          {props.data.children.map((child, index) => {
            return (
              <Node
                data={child}
                key={child.id}
                id={child.id}
                clicked={child == clicked}
                handleClick={handleClick}
                delay={index * 0.2}
              />
            );
          })}
        </div>
      );
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [clicked]);
  return (
    <div className="Node-container" ref={ref}>
      <button
        className="Node"
        id={props.data.id}
        onClick={(e) => props.handleClick(props.data)}
        style={{
          animation: "fadein ease-in 0.2s",
          WebkitAnimation: "fadein ease-in 0.2s",
          MozAnimation: "fadein ease-in 0.2s",
          Oanimation: "fadein ease-in 0.2s",
          msAnimation: "fadein ease-in 0.2s",
          animationDelay: props.delay + "s",
          WebkitAnimationDelay: props.delay + "s",
          MozAnimationDelay: props.delay + "s",
          OanimationDelay: props.delay + "s",
          msAnimationDelay: props.delay + "s",
          animationFillMode: "forwards",
          WebkitAnimationFillMode: "forwards",
          MozAnimationFillMode: "forwards",
          OanimationFillMode: "forwards",
          msAnimationFillMode: "forwards",
          animationDuration: "0.2s",
          WebkitAnimationDuration: "0.2s",
          MozAnimationDuration: "0.2s",
          OanimationDuration: "0.2s",
          msAnimationDuration: "0.2s",
        }}
      >

        <div className="name-header">{props.data.name}</div>
        <Logo url={props.data.image} name={props.data.name}></Logo>

        <div className="description">{props.data.description}</div>
      </button>

      {children()}
    </div>
  );
}
export default Node;
