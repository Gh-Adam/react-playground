import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.inputCallbackRef = null;
    this.setInputCallbackRef = (element) => (this.inputCallbackRef = element);
  }

  componentDidMount() {
    // focus on input one Mounting
    console.log('input ref', this.inputRef);
    // this.inputRef.current.focus();

    // callbackRef case
    console.log('input callback ref', this.inputCallbackRef);
    this.inputCallbackRef.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <div className="text-center my-5">
          <input type="text" ref={this.inputRef} />
          <input type="text" ref={this.setInputCallbackRef} />
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={this.clickHandler}
          >
            click
          </button>
        </div>
      </>
    );
  }
}

export default RefsDemo;
