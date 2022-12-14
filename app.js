
import cors from 'cors'
import MinglesController from './mingles/mingles-controller.js';
import mongoose from "mongoose";
import express from "express";

const CONNECTION_STRING = 'mongodb://localhost:27017/final-project';
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(express.json()); // parse JSON from http req body
app.use(cors())

mongoose.set('strictQuery', false);
MinglesController(app);
console.log('Listening on 4000');
app.listen(4000);
