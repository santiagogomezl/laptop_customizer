import React, {Component} from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartItem extends Component{

    render(){

        const {hash, selectedOption, details} = this.props;

            return(
                <div className="summary__option" key={'cart-'+hash}>
                <div className="summary__option__label">{selectedOption} </div>
                <div className="summary__option__value">{details.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(details.cost)}
                </div>
              </div>
            );
    }

}

export default CartItem;