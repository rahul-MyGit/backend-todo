import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return <div>

        <input style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="title" onChange={(e)=>{
            const value = e.target.value;
            setTitle(value);
        }}/> <br />
        <input style={{
            padding : 10,
            margin : 10
        }}  type="text" placeholder="description" onChange={(e)=>{
            const value = e.target.value;
            setDesc(value);
        }}/> <br />

        <button style={{
            padding : 10,
            margin : 10
        }}  type="button" onClick={()=>{
            fetch("http://localhost:3000/todo" , {
                method: "POST",
                body: JSON.stringify({
                    title : title,
                    desc : desc
                }),
                headers:{
                    "Content-type": "application/json"
                }
            }) 
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added");
                })
        }}> Add a todo</button>

    </div>
}