import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends PureComponent {
  render() {
    return (
      <button
        className={`button ${this.props.className}`}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  text: 'Submit',
  className: '',
  onClick: () => {}
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
