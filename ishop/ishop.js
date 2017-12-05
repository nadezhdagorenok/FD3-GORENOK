var ProductsBlock = React.createClass({

  displayName: 'ProductsBlock',

  propTypes: {
    title: React.PropTypes.string,
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        product: React.PropTypes.string.isRequired,
        //href: React.PropTypes.string.isRequired
      })
    )
  },

  render: function() {

    var productsCode=this.props.products.map( v =>
        React.DOM.div({key:v.code,className:'Products'},
          React.DOM.span({className:'Product'},v.product),
          React.DOM.span({className:'Price'},v.price),
          React.DOM.span({className:'Url'},v.url),
          React.DOM.span({className:'Count'},v.count),
          
        )
      );
    return React.DOM.div( {className:'ProductsBlock'}, 
      React.DOM.div( {className:'Title'}, this.props.title ),
      React.DOM.div( {className:'Products'}, productsCode ),
    );
  },

});