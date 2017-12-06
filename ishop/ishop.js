var ProductsBlock = React.createClass({

  displayName: 'ProductsBlock',

  propTypes: {
    title: React.PropTypes.string,
    header: React.PropTypes.array.isRequired,
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.string.isRequired,
        number: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        product: React.PropTypes.string.isRequired,
        href: React.PropTypes.string.isRequired,
        model: React.PropTypes.string.isRequired
      })
    )
  },

  render: function() {
    var headerTable = this.props.header.map(v => 
        React.DOM.div({key:v.code,className:'Header'},
          React.DOM.span({className:'ProductNumber'},v.productNumber),
          React.DOM.span({className:'ProductName'},v.productName),
          React.DOM.span({className:'ProductModel'},v.productModel),
          React.DOM.span({className:'PriceProduct'},v.priceProduct),
          React.DOM.span({className:'Url'},v.url),
          React.DOM.span({className:'Balance'},v.balance),
      )
    );

    var productsCode=this.props.products.map( v =>
        React.DOM.div({key:v.code,className:'Products'},
          React.DOM.span({className:'Number'},v.number),
          React.DOM.span({className:'Product'},v.product),
          React.DOM.span({className:'Model'},v.model),
          React.DOM.span({className:'Price'},v.price),
          React.DOM.a({className:'Href', href: v.href},v.href),
          React.DOM.span({className:'Count'},v.count),
          
        )
      );
    return React.DOM.div( {className:'ProductsBlock'}, 
      React.DOM.div( {className:'Title'}, this.props.title ),
      React.DOM.div( {className:'HeaderTable'}, headerTable ),
      React.DOM.div( {className:'AllProducts'}, productsCode ),
    );
  },

});