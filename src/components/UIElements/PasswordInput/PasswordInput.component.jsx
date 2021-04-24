import React from 'react';
import TextInput from '../TextInput/TextInput.component';
import './PasswordInput.styles.scss';

export default class PasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: 0,
    };
  }

  toggleVisibilityOn = () => {
    this.setState({
      showInput: 1,
    });
  };

  toggleVisibilityOff = () => {
    this.setState({
      showInput: 0,
    });
  };

  render() {
    const { showInput } = this.state;
    const { ...otherProps } = this.props;
    return (
      <div className='password-input'>
        <TextInput
          type={showInput ? 'text' : 'password'}
          onMouseDown={this.toggleVisibilityOn}
          onMouseUp={this.toggleVisibilityOff}
          onMouseLeave={this.toggleVisibilityOff}
          {...otherProps}
        />
      </div>
    );
  }
}
