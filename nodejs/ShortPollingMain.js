const cors = require('cors');
const express = require('express') 
const app = express();

app.use(cors());
app.use(express.json());


const messages = [] ; 

app.post('/messages',(req , res)=>{
    messages.push(req.body);
    res.status(204).end();

})

app.get('/messages',(req,res)=>{
    res.json(messages);
})









app.listen(3000);
console.log("ShortPolling running at http://localhost:3000");



















































































