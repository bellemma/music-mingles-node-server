
import cors from 'cors'
import MinglesController from './mingles/mingles-controller';
import mongoose from "mongoose";
import express from "express";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/mingles'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(express.json()); // parse JSON from http req body
app.use(cors());
MinglesController(app);

app.listen(process.env.PORT || 4000);
