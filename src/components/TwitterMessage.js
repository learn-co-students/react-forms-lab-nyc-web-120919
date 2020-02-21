import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      remaining: 280
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
               onChange={event => this.handleChange(event)}
               value={this.state.message}  />
        <label>{this.state.remaining}</label>
      </div>
    );
  }

  handleChange = (event) => {
    const message = event.target.value;
    const remaining = this.props.maxChars - message.length
    this.setState({
      message: message,
      remaining: remaining
    })
  }
}

export default TwitterMessage;
