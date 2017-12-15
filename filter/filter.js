var SelectBlock = React.createClass({
    
      displayName: 'SelectBlock',
    
      propTypes: {           
        products:React.PropTypes.arrayOf(
            React.PropTypes.shape({
            code: React.PropTypes.string.isRequired,            
            text: React.PropTypes.string.isRequired,            
          })
        ),        
      },

      getInitialState: function() {
        return {freetext:null,
                checked : false,
                search : false,
                data: this.props.products,
              };
      },
      freeTextChanged: function(fat) {                                  
          console.log('ChangeText: текст свободного ввода изменён - '+fat); 
          this.setState( {freetext:fat} );
          this.setState({search : true});
          var needle = fat.toLowerCase();
          var searchdata = this.state.data.filter(function(item){
            return item.toString().toLowerCase().indexOf(needle)>-1;
          });
          this.setState({data:searchdata});

        },
        checkboxSelected: function(){
          var data = this.state.data.slice();
          data.sort(function(a, b){
            return a > b ? 1 : -1;
          });
          this.setState({data:data});

        },     
    
    
    
      render: function() {
    
        var productsCode=this.props.products.map( v =>
            React.createElement(SelectProduct, {key:v.code,
            text:v.text, code:v.code,               
            cbFreeTextChanged:this.freeTextChanged,
            cbSelected : this.checkboxSelected,
           // onChange:this.notesSearch
            
          })
        );
    
        return React.DOM.div( {className:'SelectBlock'},   
               React.createElement(SortNotes),        
               React.DOM.select( {className:'SelectProduct', multiple: true}, productsCode ),          
        );
    
      },
    
    });