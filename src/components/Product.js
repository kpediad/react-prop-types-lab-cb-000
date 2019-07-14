// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h2>Name: {this.prop.name}</h2>
        <h3>Producer: {this.prop.producer}</h3>
        <h3>Watermark: {this.prop.hasWatermark ? "Yes" : "No"}</h3>
        <h3>Color: {this.prop.color}</h3>
        <h3>Weight: {this.prop.weight}</h3>
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
  color: PropTypes.string.isRequired,
  weight: PropTypes.

};
