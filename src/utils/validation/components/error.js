import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium class Error extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired
  };

  render() {
    const {field} = this.props;
    return <div>
      {field.error && field.touched ? <div style={styles.wrapper}>{field.error}</div> : ''}
    </div>
  }
}

const styles = {
  wrapper: {
    position: 'absolute',
    right: 0,
    top: 30,
    lineHeight: '32px',
    backgroundColor: '#FFEDEA',
    padding: '0 10px',
    color: '#E86060',
    border: '1px solid #F1B9B9',
    borderRadius: '3px 3px 0 0'
  }
};

export default Error;