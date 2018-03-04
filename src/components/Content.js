import React from 'react';


class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

//Type validate
Content.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired //isRequired is necessary
};

export default Content;