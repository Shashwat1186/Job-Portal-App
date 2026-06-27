import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

// simple test route
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello from backend",
        success: true
    })
});

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
