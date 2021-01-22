import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withSytle} from '@material-ui/core/styles';



const customer = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'1',
    'age':'25',
    'school':'University of Texas at Arlington',
    'gender':'Male'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'2',
    'age':'25',
    'school':'University of Texas at Arlington',
    'gender':'Male'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'3',
    'age':'25',
    'school':'University of Texas at Arlington',
    'gender':'Male'
  }
]



function App() {
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
            {customer.map(c=>{
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
            })}
          </TableBody>
          
        </Table>
        
  );
}

export default App;
