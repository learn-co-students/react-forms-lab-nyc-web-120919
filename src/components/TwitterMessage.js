import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      charLeft: props.maxChars,
      value: ''
    };
  }

  updateChar = (e) => {
    const value = e.target.value
    this.setState((state, props) => ({
      charLeft: props.maxChars - value.length,
      value: value
    }));
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" maxLength={this.props.maxChars} onChange={this.updateChar} value={this.state.value} />
        <span>Characters Left: {this.state.charLeft}</span>
      </div>
    );
  }
}

export default TwitterMessage;
