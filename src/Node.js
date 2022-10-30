import React, { useRef, useState, useEffect } from "react";
//import style sheet named Node.css
import "./Node.scss";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Logo from "./Logo.js";
import { scrollIntoView } from "seamless-scroll-polyfill";
import ReactDOM from "react-dom";
import Modal from "./Modal.js";

// Create a class that recieves props named name and image

function Node(props) {
  const [clicked, setClicked] = useState({});
  const [mounted, setMounted] = useState(false);
  const [render, setRender] = useState(false);
  const [parentRef, setParentRef] = useState(null);
  const ref = useRef(null);
  const myRef = useRef(null);

  const handleClick = (key) => {
    if (key.link) {
      window.open(key.link, "_blank");
    } else {
      if (key === clicked) {
        setClicked(null);
      } else {
        setClicked(key);
      }
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (props.parentRef) {
      setParentRef(props.parentRef);
    }
  }, [parentRef]);
  useEffect(() => {
    if (props.clicked !==props.data){
      setClicked(null);
    }
  }, [props.clicked]);

  //when component mount

  useEffect(() => {
    if (clicked) {
      scrollIntoView(props.rootRef.current, {
        behavior: "smooth",
        block: "end",
      });
    } else {
      scrollIntoView(ref.current, { behavior: "smooth", block: "start" });
    }
  }, [clicked]);

  return (
    <div className="Node-container">
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
        {mounted && props.parentMounted !== undefined && parentRef && myRef ? (
          //console.log(props.id, parentRef.current.getBoundingClientRect())
          <Xwrapper>
            <Xarrow
              start={parentRef}
              end={myRef}
              color="white"
              strokeWidth={4}
              path="smooth"
              arrowLength={0}
              headSize={0}
              startAnchor="bottom"
              endAnchor="top"
              animateDrawing={true}
              zIndex={100}
            />
          </Xwrapper>
        ) : null}
        <div className="name-header" ref={myRef}>
          {props.data.name}
        </div>
        <Logo url={props.data.image} name={props.data.name} />

        <div className="description">{props.data.description}</div>
        <div
          className="empty"
          style={{ width: "100%", height: 0 }}
          ref={ref}
        ></div>
      </button>
      {props.clicked === props.data && props.data.children != undefined ? (
        <Modal modalRoot={props.rootRef.current}>
          {props.data.children.map((child, index) => {
            return (
              <Node
                data={child}
                key={child.id}
                clicked={clicked}
                handleClick={handleClick}
                delay={index * 0.2}
                rootRef={props.rootRef}
                parentRef={ref}
                parentMounted={mounted}
              />
            );
          })}
        </Modal>
      ) : null}
    </div>
  );
}

export default Node;
