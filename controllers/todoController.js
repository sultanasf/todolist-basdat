import Todo from "../models/Todo.js";

const getTodos = async (req, res) => {
    try {
        /// Find all todos in the database, excluding description and priority fields.
        const todos = await Todo.find({}, { description: 0, priority: 0 });

        res.status(200).json({ todos });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findById(id);

        res.status(200).json({ todo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addTodo = async (req, res) => {
    const { title, description, completed, priority } = req.body;
    try {
        const todo = await Todo.create({
            title,
            description,
            completed,
            priority,
        });
        res.status(201).json({ todo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed, priority } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            id,
            { title, description, completed, priority },
            { new: true }
        );
        res.status(200).json({ todo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        res.status(200).json({ todo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    deleteTodo,
    addTodo,
    updateTodo,
    getTodoById,
    getTodos,
};