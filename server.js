const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4200;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/user', (req, res) => {
    let userList = [{name:"Muthu",role:"admin"},{name:"Ram",role:"user"}]
   return res.json({status:200,msg:"Success",data:userList})
});

app.listen(port, () => console.log(`Hello dude world app listening on port ${port}!`));