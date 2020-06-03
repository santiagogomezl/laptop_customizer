import React, {Component} from 'react';
import CartItem from '../CartItem/CartItem';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Summary extends Component{

    render(){

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return(
                <CartItem 
                    key={featureHash}
                    selectedOption={feature}
                    details={this.props.selected[`${feature}`]}/>
            );
        });

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        return(
            <>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
            </>
        );
    }

}

export default Summary;