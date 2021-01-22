import React from 'react';

class Customer extends React.Component{
    render(){
        return (
            <div>
            <CustomerProfile image = {this.props.image} name = {this.props.name} id={this.props.id}/>
            <CustomerInfo age = {this.props.age} school = {this.props.school} gender = {this.props.gender}/>

            </div>
        )

    }
}


class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.image} alt = "Profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return  (
            <div>
            <p>{this.props.age}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.school}</p> 
            </div>
         )
    }
}

export default Customer;