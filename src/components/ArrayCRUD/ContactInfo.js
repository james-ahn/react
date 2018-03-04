import React from 'react';

class ContactInfo extends React.Component {
    handleClick(){
        this.props.onSelect(this.props.contactKey); //contactKey 는 해당 컴포넌트의 고유 번호(react 내부사용해서 접근불가능)
    }

    // 이 내장 메소드는 컴포넌트를 다시 렌더링 해야 할 지 말지 정의(Component Lifecycle API)
    shouldComponentUpdate(nextProps, nextState){
        console.log('nextProps',JSON.stringify(nextProps))
        console.log('this.props',JSON.stringify(this.props))
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }
    render() {
        console.log("rendered: " + this.props.name);
        let getStyle = isSelect => {
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };

        return(
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.props.phone}
            </li>
        );
    }
}

export default ContactInfo;