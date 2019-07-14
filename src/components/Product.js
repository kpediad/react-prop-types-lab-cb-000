// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h2>Name: {this.props.name}</h2>
        <h3>Producer: {this.props.producer}</h3>
        <h3>Watermark: {this.props.hasWatermark ? "Yes" : "No"}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Weight: {this.props.weight}</h3>
      </div>
    );
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: between80And300,
  weight: PropTypes.number.isRequired
};

function between80And300(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return (value >= 80 && value <= 300) ? null : new Error(propName + ' in ' + componentName + " is not within 80 to 300");
    }
  }
  // assume all ok
  return null;
}
