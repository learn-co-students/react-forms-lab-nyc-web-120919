import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage= (e) => {
    this.setState({message: e.target.value})
  }

  showRemaining = () => {
    let maxChars = this.props.maxChars
    let remainingChars = maxChars - this.state.message.length
    return remainingChars
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.updateMessage(e)}/>
        <p>{this.showRemaining()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
