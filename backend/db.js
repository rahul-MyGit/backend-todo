/* 
Todo {
    title : String,
    desc : String;
    completed : boolean
}
*/

const mongoose = require('mongoose');
// mongoDB url : mongodb+srv://rahulmymail1:Mummypapa1@cluster0.yi4cwev.mongodb.net/todos
mongoose.connect("mongodb+srv://rahulmymail1:Mummypapa1@cluster0.yi4cwev.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    titlle : String,
    desc : String,
    completed : Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}