const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const multer = require('multer')
const path = require('path')




const userRoute = require("./routes/users") 
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
 
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('connected', () => console.log('connected to mongoose'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
mongoose.connection.on('disconnected', () => console.log('Disconnected from MongoDB'));

app.use("/images", express.static(path.join(__dirname, "public/images")))  //if you see this path after localhost:8800, dont see it as a eq but go straight to the folder public/images

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images'); // Set the destination folder
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name || Date.now()+file.originalname); // Use the name provided in the request body req.body.name
    }
});

const upload = multer({storage})


app.post("/api/upload", upload.single('file'), (req, res)=>{
    try{
        return res.status(200).json('file uploaded successfully')
    }catch(err){
        console.log(err)
    }
})

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.get("/", (req, res) => {
    res.send("Welcome to the API!"); // Define the response for the root
});



app.listen(8800, ()=>{
    console.log("Backend Server is running on port 8800.");
});