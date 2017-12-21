import React from 'react';
import PropTypes from 'prop-types';

import './ProductsTitle.css';

class ProductsTitle extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  
  render() {
    return <div className='ProductsTitle'>{this.props.title}</div>;
  }

}

export default ProductsTitle;