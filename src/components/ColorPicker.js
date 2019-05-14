import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  // eslint-disable-next-line
  clickHandler = event => {
    console.log(`${this.props.title}`);
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.title}</button>
    );
  }
}
