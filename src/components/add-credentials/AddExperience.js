import React, { Component } from 'react';
import { Link, withRruter } from 'react-router-dom';
import { TextFieldGroup } from '../common/TextFieldGroup';
import { TextAreaFieldGroup } from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AddExperience extends Component {
  state = {
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false
  };

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <h1>Experience</h1>
      </div>
    );
  }
}

export default AddExperience;
