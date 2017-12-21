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
                data: this.props.products,
              };
      },
      freeTextChanged: function(EO) { 
        //alert('InputText: текст свободного ввода изменён - '+ EO.target.value); 
        var value = EO.target.value;
        this.setState( {freetext: value} );
        //alert(this.state.freetext);
        this.textChanged('фильтр', value);
                 
      },
      checkboxClicked: function(EO){
      console.log('Checkbox чекнут - ', EO.target.value);  
      this.setState({checked:true});       
      this.textChanged('сортировка');

      },
      textChanged: function(purpose, val) {                                
          var searchdata=[];          
          //alert(val);
          if(purpose === 'фильтр'){          
              var needle = val.toLowerCase();     
              searchdata = this.state.data.filter(function(item){
              return item.toString().toLowerCase().indexOf(needle) > -1;
          });
        }
        else {
            searchdata = this.props.products;
        }
        if(purpose === 'сортировка'){
            searchdata = this.state.data.slice();
            console.log(searchdata);
            searchdata.sort(function(a, b){
            return a > b ? 1 : -1;
          });
        }              
        this.setState({data:searchdata});     
        },        
    
    
      render: function() {
    
        var productsCode = this.state.data.map( v =>
            React.createElement(SelectProduct, {key:v.code,
            text:v.text, code:v.code     
                  
          })
        );
    
        return React.DOM.div( {className:'SelectBlock'}, 
                 React.DOM.input({type:'checkbox', className:'CheckBox', defaultChecked:this.state.checked, onChange:this.checkboxClicked}),
                 React.DOM.input({type:'text',name:'typeText',className:'FreeText', placeholder: 'Поиск', defaultValue:this.state.freetext,onChange:this.freeTextChanged}),  
                //  React.createElement(SortNotes, {freetext: this.state.freetext, checked:this.state.checked, cbTextChanged: this.textChanged}),        
                 React.DOM.select( {className:'SelectProduct', multiple: true, defaultValue:this.state.data}, productsCode),              //defaultValue:['стол','стул', 'шкаф', 'полка']},
               );
    
      },
    
    });