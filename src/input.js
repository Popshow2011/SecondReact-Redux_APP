import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <input
          type="text"
          className="userName"
          inputValue={this.props.inputValue}
          onChange={ev => {
            this.props.inputValue(ev.target.value);
          }}
          placeholder="Введите Ваше имя"
        />
      </>
    );
  }
}

export default Input;
