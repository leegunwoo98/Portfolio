import React, { useRef, useState, useEffect } from "react";
//import style sheet named Node.css
import "./Node.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Logo from "./Logo.js";

// Create a class that recieves props named name and image
class Node extends React.Component {
  //create a constructor
  constructor(props) {
    super(props);
    this.state = {
      clicked: {},
      mounted: false,
    };
    // bind the handleClick function to the class
    this.handleClick = this.handleClick.bind(this);
    this.children = this.children.bind(this);
    this.ref = React.createRef();
  }

  handleClick(key) {
    if (key === this.state.clicked) {
      this.setState((this.state.clicked = {}));
    } else {
      this.setState((this.state.clicked = key));
    }
  }

  children() {
    if (
      this.props.clicked &&
      this.props.data.children != undefined &&
      this.state.mounted
    ) {
      return (
        <div className="children">
          {this.props.data.children.map((child, index) => {
            return (
              <Node
                data={child}
                key={child.id}
                id={child.id}
                clicked={child == this.state.clicked}
                handleClick={this.handleClick}
                delay={index * 0.2}
              />
            );
          })}
        </div>
      );
    }
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  componentDidUpdate() {
    this.ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  render() {
    return (
      <div className="Node-container" ref={this.ref}>
        <button
          className="Node"
          id={this.props.data.id}
          onClick={(e) => this.props.handleClick(this.props.data)}
          style={{
            animation: "fadein ease-in 0.2s",
            WebkitAnimation: "fadein ease-in 0.2s",
            MozAnimation: "fadein ease-in 0.2s",
            Oanimation: "fadein ease-in 0.2s",
            msAnimation: "fadein ease-in 0.2s",
            animationDelay: this.props.delay + "s",
            WebkitAnimationDelay: this.props.delay + "s",
            MozAnimationDelay: this.props.delay + "s",
            OanimationDelay: this.props.delay + "s",
            msAnimationDelay: this.props.delay + "s",
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
          {/* {this.state.child_refs.map((ref) => {
            if(ref!=undefined){
              return <Xarrow start={this.ref} end={ref} />
            }
          }
        )} */}

          <div className="name-header">{this.props.data.name}</div>
          <Logo url={this.props.data.image} name={this.props.data.name}></Logo>

          <div className="description">{this.props.data.description}</div>
        </button>

        {this.children()}
      </div>
    );
  }
}
export default Node;
