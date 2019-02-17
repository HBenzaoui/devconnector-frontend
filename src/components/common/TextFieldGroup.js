import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChnage,
  disbaled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        disbaled={disbaled}
        onChange={onChnage}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  error: propTypes.string,
  info: propTypes.string,
  type: propTypes.string.isRequired,
  onChnage: propTypes.func.isRequired,
  disbaled: propTypes.string
};

TextFieldGroup.deffaultProps = {
  type: 'text'
};

export default TextFieldGroup;
