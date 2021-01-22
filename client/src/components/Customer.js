import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell>{this.props.name}</TableCell>
                <TableCell><img src = {this.props.image} alt = "Profile"/></TableCell>
                <TableCell>{this.props.age}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.school}</TableCell>
            </TableRow>
        )

    }
}



export default Customer;