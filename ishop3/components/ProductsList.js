import React from 'react';
import PropTypes from 'prop-types';

import './ProductsList.css';

class ProductsList extends React.Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    href: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,    
    workMode: PropTypes.number.isRequired,
    // freeanswer: PropTypes.bool,
    // freeanswertext: PropTypes.string.isRequired,
    // cbFreeAnswerTextChanged: PropTypes.func.isRequired,
    // cbSelected: PropTypes.func.isRequired,
    // selectedAnswerCode: PropTypes.number, // может быть null, пока ни один ответ не выбран
  };

  answerClicked = (EO) => {
    this.props.cbSelected(this.props.code);
  }

  freeAnswerTextChanged = (EO) => { 
    console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); 
    this.props.cbFreeAnswerTextChanged(EO.target.value);
  }

  render() {
      

    if ( this.props.workMode==1 ) {
      return (
        <div>
          <div className='Products' key={this.props.code} style={{color:"white", border:"1px solid black"}} onClick = {this.productClicked}>
            <span className='Number'>{this.props.number}</span>
            <span className='Product'>{this.props.product}</span>
            <span className='Model'>{this.props.model}</span>
            <span className='Price'>{this.props.price}</span>
            <span className='Href'>{this.props.href}</span>
            <span className='Count'>{this.props.count}</span>
            <input type='button' name='Редактировать' className='ChangeButton'
                onClick={this.ProductDataChanged}                
            />
            <input type='button' name='Удалить' className='DeleteButton'
                onClick={this.ProductDataDelete}            
            />          
          </div>
          <input type='button' name='Новый' className='NewButton'
                onClick={this.NewProductAdd}            
            />   

            {
                (this.props.newProduct) &&
                <form className = 'NewForm'>
                  <div>
                      <label>Название товара</label>
                      <inpyt type="text" name="productName" />
                   </div>
                   <div>
                      <label>Модель товара</label>
                      <inpyt type="text" name="productModel" />
                   </div>
                   <div>
                      <label>Стоимость товара</label>
                      <inpyt type="text" name="productPrice" />
                   </div>
                   <div>
                      <label>Ссылка на товар</label>
                      <inpyt type="text" name="productHref" />
                   </div>
                   <div>
                      <label>Количество товара на складе</label>
                      <inpyt type="text" name="productCount" />
                   </div>
                   <input type = "button" name='Сохранить' className='SaveButton'
                    onClick={this.NewProductSave}            
                   /> 
                   <input type = "reset" name='Отмена' className='ResetButton'
                    onClick={this.NewProductReset}            
                   /> 

                </form>
            }       
            
            {
              (this.props.code) &&
              <input type='button' name='Редактировать' className='ChangeButton'
                onClick={this.ProductDataChanged}
                disabled={this.props.selectedProductCode!=this.props.code}
              />
            }
            {
               (this.props.code) &&
                <div className = 'ProductCard'>
                  <p>Номер товара в списке: {this.props.number}</p>
                  <p>Товар: {this.props.product}</p>
                  <p>Модель: {this.props.model}</p>
                  <p>Стоимость, BYN {this.props.price}</p>
                  <p>Ссылка на товар: {this.props.href}</p>
                  <p>Остаток на складе: {this.props.count}</p>
                </div>
            }
          
        </div>
      )
    }
    else {
      return (
        <div className='Product'>
          <span className='Count'>{this.props.count}</span>
          <span className='Text'>{this.props.text}</span>
        </div>
      );
    }

  }

}

export default ProductsList;