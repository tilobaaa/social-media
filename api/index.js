const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

const userRoute = require("./routes/users") 
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
 
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('connected', () => console.log('connected to mongoose'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Disconnected from MongoDB'));

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.get("/", (req, res) => {
    res.send("Welcome to the API!"); // Define the response for the root
});


app.listen(8800, ()=>{
    console.log("Backend Server is running on port 8800.");
});