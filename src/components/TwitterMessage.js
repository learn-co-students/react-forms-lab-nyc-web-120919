import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ""
  }

  changeHandler = (event) => {
    this.setState({ message: event.target.value})
  }
  render() {
    let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeHandler} value={this.state.message} />
        {charNum}
      </div>
    );
  }

}

export default TwitterMessage;
