import React, {Component} from 'react';
import Feature from '../Feature/Feature';


class Builder extends Component{

    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return(
                <Feature 
                    key={featureHash} 
                    feature={feature} 
                    options={this.props.features[`${feature}`]}
                    selectedOption={this.props.selectedOption[`${feature}`]}
                    handleUpdate={this.props.handleUpdate}/>
            );
        });
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }

}

export default Builder;