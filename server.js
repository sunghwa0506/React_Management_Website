const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customer',(req,res)=>{
    res.send([
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
      ]);
});

app.listen(port,()=>console.log(`Listening on port ${port}`));