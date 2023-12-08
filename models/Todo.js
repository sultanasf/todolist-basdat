import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: false, },
    completed: { type: Boolean, default: false, },
    priority: {
        urgency: {
            type: String, enum: ['low', 'medium', 'high'], default: 'medium',
        },
        importance: {
            type: String, enum: ['low', 'medium', 'high'], default: 'medium',
        },
    },
    createdAt: { type: Date, default: Date.now, },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;