import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect.js';
import todoRoutes from './routes/todoRoute.js';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/todos', todoRoutes);

dbConnect().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
    });
}).catch((error) => {
    console.log(`Error: ${error.message}`);
    process.exit(1);
});