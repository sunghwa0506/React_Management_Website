import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import React, { Component } from 'react';

class App extends Component{

  state = {customer:""}

  componentDidMount(){
    this.callApi()
      .then(res =>this.setState({customer:res}))
      .catch(err =>console.log(err));
  }

  callApi = async () =>{
    const response = await fetch('/api/customer');
    const body = await response.json();
    return body;
  }

  render(){


    return (
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>image</TableCell>
          <TableCell>age</TableCell>
          <TableCell>gender</TableCell>
          <TableCell>school</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {this.state.customer ? this.state.customer.map(c=>{
          return(
            <Customer
            id = {c.id}
            image = {c.image}
            gender = {c.gender}
            name = {c.name}
            school = {c.school}f
            age = {c.age}>

            </Customer>
          );
        }) : "" }
      </TableBody>
      
    </Table>
    );
  }
}


export default App;
