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
        console.log('InputText: текст свободного ввода изменён - '+ EO.target.value); 
        var value = EO.target.value;
        this.setState( {freetext: value}, this.textChanged);
        console.log(this.state.freetext);     
      },
      checkboxClicked: function(EO){
      console.log('Checkbox чекнут - ', EO.target.checked);  
      var checked = EO.target.checked;
      this.setState({checked:checked}, this.textChanged);       
      },

      textChanged: function() {                                
        var searchdata=[];            
            
        console.log(this.state.freetext);

        if(this.state.freetext){          
          var needle = this.state.freetext;  
          if(!needle){
            this.setState({data:this.props.products});
            return;
          }
          console.log('needle=  ', needle);
          console.log('this.state.data перед фильтром =  ', this.state.data);    
                   
          searchdata=this.state.data.filter(function(item){
           
          return item['text'].toString().toLowerCase().indexOf(needle) > -1;
          
      });         
   }
   else {
    searchdata = this.props.products.slice();
   }
   
      
       if(this.state.checked){            
        searchdata = this.state.data.slice();
        if(!this.state.checked){
          this.setState({data:this.props.products});
          return;
        }
        console.log(searchdata);
        searchdata.sort(function(a, b){
        return a.text > b.text ? 1 : -1;
      });     
          
    }
    // else {
    //   searchdata = this.props.products.slice();
    //  }

     this.setState({data:searchdata});         
     console.log('state.data=  ',this.state.data);  
      },



      

    
    
      render: function() {
    
        var productsCode = this.state.data.map( v =>
            React.createElement(SelectProduct, {key:v.code,
            text:v.text, code:v.code                
          })
        );
    
        return React.DOM.div( {className:'SelectBlock'}, 
                 React.DOM.input({type:'checkbox', className:'CheckBox', defaultChecked:this.state.checked, onClick:this.checkboxClicked}),
                 React.DOM.input({type:'text',name:'typeText',className:'FreeText', placeholder: 'Поиск', defaultValue:this.state.freetext,onChange:this.freeTextChanged}),  
                 React.DOM.select( {className:'SelectProduct', multiple: true, defaultValue:['стол','стул', 'шкаф', 'полка']}, productsCode),              //defaultValue:['стол','стул', 'шкаф', 'полка']},
               );
    
      },
    
    });