import React from 'react';

class RandomNumber extends React.Component {
    //생성자 먼저 실행됨
    constructor(props){
        super(props);
        this.updateNumber = this.updateNumber.bind(this); //this.props에 접근할수있도록 binding
    }

    updateNumber(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value); // function style prop - check the parents components
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;