import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles'

const Styles = theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  progress : {
    margin:theme.spacing(2)
  }
})


class App extends Component{


  state = {customer:"",
            completed : 0}

  componentDidMount(){
    this.callApi()
      .then(res =>this.setState({customer:res}))
      .catch(err => console.log(err));

  }

  callApi = async () =>{
    const response = await fetch('/api/customer');
    const body = await response.json();
    return body;
  }


  render(){

    const {classes} = this.props;

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
        }) : 
        <TableRow>
          <TableCell colSpan = "6" align = "center">
            <CircularProgress className={classes.progress}></CircularProgress>
          </TableCell>
        </TableRow> }
      </TableBody>
      
    </Table>
    );
  }
}


export default withStyles(Styles)(App);
