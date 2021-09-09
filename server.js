import express from 'express';
import Cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import mytripsRoutes from './routes/mytrips.js';

// App Config
const app = express();
const port = 9000;

// Middlewares
app.use(Cors());
app.use(bodyParser.json({ limit: "250mb" }));
app.use(bodyParser.urlencoded({ limit: "250mb", extended: true, parameterLimit: 50000 }));

// Database Config
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.9qhwg.mongodb.net/travelExpenseTrackerDb?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, err => {
    if (err) throw err;
    else console.log('connected to MongoDB');
})

// API Endpoints
app.use('/mytrips', mytripsRoutes);

// Listener
app.listen(port, () => console.log(`Listening to localhost:${port}`))