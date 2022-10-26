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
  const [clicked, setClicked] = useState({});
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const myRef=useRef(null)

  const handleClick = (key) => {
    if (key.link) {
      window.open(key.link, "_blank");
    } else {
      if (key === clicked) {
        setClicked({});
      } else {
        setClicked(key);
      }
    }
  };
  /*when component is unmounted set clicked to null*/
  // useEffect(() => {
  //   return () => {
  //     setClicked({});
  //   };
  // }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
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
        {mounted && props.parentRef && myRef ? (
          <Xwrapper>
            <Xarrow
              start={props.parentRef}
              end={myRef}
              color="white"
              strokeWidth={4}
              path="smooth"
              arrowLength={0}
              headSize={0}
              dashness={false}
              startAnchor="bottom"
              endAnchor="top"
              animateDrawing={true}
            />
          </Xwrapper>
        ) : null}
        <div className="name-header" ref={myRef}>
          {props.data.name}
        </div>
        <Logo url={props.data.image} name={props.data.name} />

        <div className="description" ref={ref}>
          {props.data.description}
        </div>
      </button>
      <Children
        data={props}
        parentRef={ref}
        clicked={clicked}
        handleClick={handleClick}
      />
    </div>
  );
}

function Children({ data, parentRef, clicked, handleClick }) {
  const [mounted, setMounted] = useState(0);
  // if component mount set mount to 1
  useEffect(() => {
    setMounted(1);
  });
  if (data.clicked && data.data.children != undefined && mounted === 1) {
    const rootNode = data.rootRef;
    return (
      <Modal modalRoot={rootNode.current}>
        <div className="children">
          {data.data.children.map((child, index) => {
            return (
              <ChildrenElement
                child={child}
                index={index}
                data={data}
                parentRef={parentRef}
                clicked={clicked}
                handleClick={handleClick}
                rootRef={rootNode}
              />
            );
          })}
        </div>
      </Modal>
    );
  }
}
function ChildrenElement({
  child,
  index,
  data,
  parentRef,
  clicked,
  handleClick,
  rootRef,
}) {
  const childRef = useRef();
  const [mounted, setMounted] = useState(false);
  // if component mount set mount to 1
  useEffect(() => {
    //console.log parentRef position
    //console.log(parentRef.current.getBoundingClientRect());

    setMounted(true);
  }, [childRef]);
  const element = (
    <div>
      <Node
        data={child}
        key={child.id}
        id={child.id}
        clicked={child == clicked}
        handleClick={handleClick}
        delay={index * 0.2}
        rootRef={rootRef}
        parentRef={parentRef}
      />
    </div>
  );
  return element;
}
export default Node;
