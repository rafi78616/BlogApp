import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb+srv://admin:laOokPGPNxlnE0lZ@cluster0.khdhf5l.mongodb.net/Blog?retryWrites=true&w=majority'
).then(() => app.listen(5000))
 .then(() => console.log("Connected to mongodb and listening to server")
).catch((err) => console.log(err));