import React, { useRef, useImperativeHandle } from "react";
import Xarrow from "react-xarrows";
import Node from "./Node.js";

export default function Childrens(props,state,handleClick) {

  if (props.clicked && props.data.children != undefined) {
    return (
      <div className="children">
        {props.data.children.map((child, index) => {
          let component = (
            <div>
              <Node
                data={child}
                key={child}
                clicked={child == state.clicked}
                handleClick={handleClick}
                delay={index * 0.5}
                // ref={this.child_refs}
              />
              {/* {this.ref != undefined &&
                  this.child_refs[index] != undefined ? (
                    <Xarrow start={this.ref} end={this.child_refs[index]} />
                  ) : null} */}
            </div>
          );
          return component;
        })}
      </div>
    );
  }
}

// }
//   children() {

//   }
