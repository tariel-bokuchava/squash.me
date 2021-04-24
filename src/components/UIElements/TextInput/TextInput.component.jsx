import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.styles.scss';

const TextInput = ({
  id,
  handleChange,
  valueText,
  defaultText,
  ...otherProps
}) => (
  <div>
    <label class-name='text-input-label' htmlFor={id}>
      {defaultText.toUpperCase()}
    </label>
    <input
      id={id}
      type='text'
      className='text-input'
      value={valueText}
      // placeholder={defaultText}
      onChange={handleChange}
      onSubmit={handleChange}
      {...otherProps}
    />
  </div>
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  valueText: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired,
};

export default TextInput;
