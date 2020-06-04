import React, {Component} from 'react';
import Option from '../Option/Option';
import slugify from 'slugify';

class Feature extends Component{
    render(){
        const {featureHash, feature, options, selectedOption} = this.props;
        const items = options.map((item,idx) => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <Option
                key={idx} 
                itemHash={itemHash+idx}
                feature={feature} 
                item={item}
                selectedOption={item.name === selectedOption.name ? true : false}
                handleUpdate={this.props.handleUpdate}/>
            );
          });
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {items}
            </fieldset>
        );
    }

}

export default Feature;