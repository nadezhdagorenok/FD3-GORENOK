var SortNotes = React.createClass({
    
      displayName: 'SortNotes',
    
      propTypes: {        
        freetext: React.PropTypes.string,
        checked: React.PropTypes.bool.isRequired,  
        cbFreeTextChanged: React.PropTypes.func.isRequired,     
        cbSelected: React.PropTypes.func.isRequired, 
      },
      freeTextChanged: function(EO) { 
          console.log('InputText: текст свободного ввода изменён - '+ EO.target.value); 
          this.props.cbFreeTextChanged(EO.target.value);
                   
      },
      checkboxClicked: function(EO){
        console.log('Checkbox чекнут - ');         
        this.props.cbSelected(!this.props.checked);

      },

    
      render: function() {
        return React.DOM.div({className:'FormBlock'},     
                   React.DOM.input({type:'checkbox', className:'CheckBox', checked:this.props.checked, onClick:this.checkboxClicked}),
                   React.DOM.input({type:'text',name:'typeText',className:'FreeText', placeholder: 'Поиск', defaultValue:this.props.freetext,onChange:this.freeTextChanged}), 
        );
      },
    
    });