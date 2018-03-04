import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {

    constructor(props){
        super(props);

        // set the first state
        this.state = {
            value: Math.round(Math.random()*100)
        };

        //updateValue() 메소드에서 this.setState 에 접근 할 수 있도록 bind 합니다.
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }

    render(){
        return  (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                         body={ this.props.contentBody }/>
                <RandomNumber number={this.state.value}
                              onUpdate={this.updateValue} />
            </div>
        );
    }
}

// default props
App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;