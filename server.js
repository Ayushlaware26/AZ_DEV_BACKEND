import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import sidebarRoutes from './routes/sidebar.js';
import nodeRoutes from './routes/node.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Use the routes
app.use('/api/sidebar', sidebarRoutes);
app.use('/api/node', nodeRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch(err => console.log(err));
