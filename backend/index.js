const express = require('express');
const { todo } = require('./db');
const {updateTodo, createTodo} = require('./types.js');
const app = express();

app.use(express.json());

app.get("/todos", async (req,res)=>{
    const response = await todo.find({});
    res.json({
        msg : response
    });
});

app.post("/todo", async (req,res)=>{
    const response = createTodo.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg : "Wrong input"
        });
        return;
    }
    //Put in mongoDB
    await todo.create({
        title : req.body.title,
        desc : req.body.desc,
        completed : false
    });

    res.json({
        msg : "TODO created"
    });
});


app.put("/completed", async (req,res)=>{
    const response = updateTodo.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg : "Wrong input"
        });
        return;
    }
    //Edit in mongoDB : update todo and mark it as completed

    await todo.updateOne({
        _id : req.body.id
    },{ $set:{
        completed : true
        }
    })

    res.json({
        msg : "TODO MARK AS COMPLETED"
    })
});

app.listen(3000, (err)=>{
    if (err) console.log("Error in server");
    console.log("Server is running on 3000");
});