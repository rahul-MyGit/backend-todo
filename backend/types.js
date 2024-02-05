const z = require('zod');

const createTodo = z.object({
    title : z.string(),
    desc : z.string(),
});

const updateTod = z.object({
    id : z.string
});

module.exports({
    createTodo,
    updateTod
})