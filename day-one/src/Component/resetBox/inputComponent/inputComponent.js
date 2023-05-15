import React from 'react';
import style from './inputComponent.module.css';

export default class InputComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleResetClick = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div className={style.formStyle}>
        <input
          className={style.input}
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <span></span>
        <button className={style.button} onClick={this.handleResetClick}>
          Reset
        </button>
      </div>
    );
  }
}

