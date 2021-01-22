import './App.css';
import Customer from './components/Customer';

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
    customer.map(c=>{
      return (
        <Customer key = {c.id}
          id = {c.id}
          image = {c.image}
          name = {c.name}
          gender = {c.gender}
          school = {c.school}
          age = {c.age}/>
      )
    })  
  );
}

export default App;
