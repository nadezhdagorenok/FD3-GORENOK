import React from 'react';
import PropTypes from 'prop-types';

import './ProductsBlock.css';

import ProductsTitle from './ProductsTitle';
import ProductsHeader from './ProductsHeader';
import ProductsList from './ProductsList';

class ProductsBlock extends React.Component {

  static propTypes = {
    startWorkMode: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    products:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        product: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        href: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,  
        //freeanswer: PropTypes.bool,
      })
    ),
    //deffreeanswertext: PropTypes.string.isRequired,
  };

  state = {
    selectedAnswerCode: null,
    freeanswertext:this.props.deffreeanswertext,
    workMode:this.props.startWorkMode,
  }

  answerSelected = (code) => {
    console.log('выбран ответ с кодом '+code);
    this.setState( {selectedAnswerCode:code} );
  }

  vote = () => {
    console.log('голосование завершено, выбран ответ с кодом '+this.state.selectedAnswerCode);

    this.props.answers.forEach( answer => {
      if ( answer.code==this.state.selectedAnswerCode )
        answer.count++;
    } );

    this.setState( {workMode:2} );
  }

  freeAnswerTextChanged = (fat) => { 
    console.log('VotesBlock: текст свободного ответа изменён - '+fat); 
    this.setState( {freeanswertext:fat} );
  }

  render() {

    var productsCode=this.props.products.map( v =>
      <ProductsList key={v.code}
        number={v.number} product={v.product} model={v.model} price={v.price} href={v.href} count={v.count}
        // freeanswer={v.freeanswer} freeanswertext={this.state.freeanswertext}
        // cbSelected={this.answerSelected}
        // cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
        // selectedAnswerCode={this.state.selectedAnswerCode}
        // workMode={this.state.workMode}
      />
    );

    return (
      <div className='ProductsBlock'>
        <ProductsTitle question={this.props.title}/>
        <ProductsHeader question={this.props.header}/>
        <div className='Products'>{productsCode}</div>
        {/* {
          ((this.state.workMode==1)&&this.state.selectedAnswerCode) &&
          <input type='button' value='проголосовать' onClick={this.vote} />
        } */}
      </div>
    )
    ;

  }

}

export default ProductsBlock;