const express = require('express');
const {updateTodo, createTodo} = req('./types.js');
const app = express();

app.use(express.json());

app.get("/todos", (req,res)=>{
    
});

app.post("/todo", (req,res)=>{
    const response = createTodo.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg : "Wrong input"
        });
        return;
    }
    //Put in mongoDB
});


app.put("/completed", (req,res)=>{
    const response = updateTodo.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg : "Wrong input"
        });
        return;
    }
    //Edit in mongoDB
});

app.listen(3000);