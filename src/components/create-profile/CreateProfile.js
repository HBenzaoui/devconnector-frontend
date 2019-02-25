import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';

export class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    youtube: '',
    linkedin: '',
    instagram: '',
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submit');
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors, displaySocialInputs } = this.state;

    let SocialInputs;

    if (displaySocialInputs) {
      SocialInputs = (
        <React.Fragment>
          <InputGroup
            placeholder="LinkedIn Profile URL"
            name="linkedin"
            value={this.state.linkedin}
            onChange={this.handleChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            value={this.state.twitter}
            onChange={this.handleChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            value={this.state.facebook}
            onChange={this.handleChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Youtube Channel URL"
            name="youtube"
            value={this.state.youtube}
            onChange={this.handleChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Instagram page URL"
            name="instagram"
            value={this.state.instagram}
            onChange={this.handleChange}
            error={errors.instagram}
          />
        </React.Fragment>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select professtional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Studen or Learner', value: 'Studen or Learner' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Lets get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = requied fields</small>
              <form onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.handleChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL, Your full name, company name, nickname"
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.handleChange}
                  options={options}
                  error={errors.status}
                  info="Tell us where you at in your career"
                />
                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleChange}
                  error={errors.company}
                  info="Name your own company or the one you work for"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="company"
                  value={this.state.company}
                  onChange={this.handleChange}
                  error={errors.company}
                  info="Your personal website or your company's website"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.Location}
                  onChange={this.handleChange}
                  error={errors.Location}
                  info="City & State or province (eg. Bab Ezzouar, Algiers)"
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.handleChange}
                  error={errors.skills}
                  info="Use comma separated values (eg. HTML,CSS,JavaScript)"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.handleChange}
                  error={errors.githubusername}
                  info="This's to show your latest GitHub repositories"
                />
                <TextAreaFieldGroup
                  placeholder="Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleChange}
                  error={errors.bio}
                  info="Tell us about you"
                />
                <div className="mb-3">
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted"> Optional</span>
                </div>
                {SocialInputs}
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
