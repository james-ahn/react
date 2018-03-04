import React from 'react';


class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ]
        };
    }

    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {/*<ContactInfo name="Abet" phone="010-0000-0001"/>*/}
                    {/*<ContactInfo name="Betty" phone="010-0000-0002"/>*/}
                    {/*<ContactInfo name="Charlie" phone="010-0000-0003"/>*/}
                    {/*<ContactInfo name="David" phone="010-0000-0004"/>*/}

                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                             phone={contact.phone}
                                             key={i}
                        />);
                    })}

                </ul>
            </div>
        );
    }
}



class ContactInfo extends React.Component {
    render() {
        return(
            <li>{this.props.name} {this.props.phone}</li>
        );
    }
}

export default Contacts;