import React from 'react';

class StateExample extends React.Component {
    //생성자
    constructor(props) {
        super(props);

        //{ this.state.stateName }
        this.state = {
            header: "Header Initial state",
            content: "Content Initial State"
        };
    }

    updateHeader(text){

        //this.setState()
        this.setState({
            header: "Header has changed"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                {/*not auto binding in ES6 class so, must use bind*/}
                <button onClick={this.updateHeader.bind(this)}>Update</button>
            </div>
        );
    }
}

export default StateExample;