import logo from "./logo.svg";
import "./App.css";
import Node from "./Node.js";
import data from "./data.js";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: {},
      mounted: false,
      help_needed: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.ref = React.createRef();
  }
  handleClick(key) {
    if (key == this.state.clicked) {
      this.setState((this.state.clicked = {}));
    } else {
      this.setState((this.state.clicked = key));
    }
  }
  // componentDidMount
  componentDidMount() {
    this.setState({ mounted: true });
  }
  help() {
    if (this.state.help_needed) {
      return (
        <div id="how">
          <div
            id="delete"
            onClick={() => {this.setState({ help_needed: false }) 
          }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </div>
          <div id="how_header">How to use</div>

          <div id="how_body">
            Click on a icon to expand it. Click on the same icon to collapse it.
          </div>
        </div>
      );
    } else {
      return (
        <div id="help" onClick={() => this.setState({ help_needed: true })}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
          </svg>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        {this.help()}
        <div id="root_node">
          <Node
            data={data}
            key={data.id}
            clicked={data == this.state.clicked}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
