var SelectProduct = React.createClass({
    
      displayName: 'SelectProduct',
    
      propTypes: {
        code: React.PropTypes.string.isRequired,        
        text: React.PropTypes.string.isRequired,
        // workMode: React.PropTypes.number.isRequired,
        
        //cbFreeAnswerTextChanged: React.PropTypes.func.isRequired,
        //cbSelected: React.PropTypes.func.isRequired,
        // isSelected: React.PropTypes.bool.isRequired,
      },    
    
      render: function() {    
          return     
                     React.DOM.div({className:'TextBlock'},                         
                     React.DOM.select({multiple: true}, 
                     React.DOM.option({value:this.props.text}, this.props.text, this.props.code)
                    ),
                  );      
    
      },
    
    });