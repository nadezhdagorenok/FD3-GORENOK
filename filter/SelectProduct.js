var SelectProduct = React.createClass({
    
      displayName: 'SelectProduct',
    
      propTypes: {
        code: React.PropTypes.string.isRequired,        
        text: React.PropTypes.string.isRequired,        
      },    
    
      render: function() {    
          return  (                     
                     React.DOM.option({className:'TextBlock', value:this.props.code}, this.props.text)                   
                  );      
    
      },
    
    });


         
