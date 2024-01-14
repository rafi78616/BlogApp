import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";


const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect('mongodb+srv://admin:laOokPGPNxlnE0lZ@cluster0.khdhf5l.mongodb.net/Blog?retryWrites=true&w=majority'
).then(() => app.listen(5000))
 .then(() => console.log("Connected to mongodb and listening to server")
).catch((err) => console.log(err));