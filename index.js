import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRouter.js";
import itemRouter from "./routes/itemRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";
import productRouter from "./routes/productRouter.js";
import verifyJWT from "./middleware/auth.js";
import orderRouter from "./routes/orderRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app =express();

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("database connected");
    }
).catch(
    ()=>{
        console.log("database not connected");
    }
)-

app.use(bodyParser.json());
//mongodb+srv://admin:123@cluster0.6tnyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
app.use(verifyJWT)



app.use("/api/student",studentRouter);
app.use("/api/item",itemRouter);
app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/order",orderRouter);
 

app.get("/",
    (req,res)=>{
        Student.find().then(
        (students)=>{
            res.json(students);
        }
       ).catch(
        ()=>{
            res.json({
                message:"student not found"
            })
       })
    }
)

app.post("/",
    (req,res)=>{
          
       
        const student  = new Student(req.body);

        student.save().then(
        () => {
            res.json({message: "student savwd"});
        }
    ).catch(
        ()=>{
            res.json({
                message:"student not saved"
            })
        }
    )

    }

    

       
)

app.delete("/",
    (req,res)=>{
        console.log(req.body)
        console.log("delete request received");
        res.json({
            message:"this is a delete request"});
    }
)

app.put("/",
    (req,res)=>{
        console.log(req.body)
        console.log("put request received");
        res.json({
            message:"this is a put request"});
    }
)



 app.listen(3000,
    ()=>{
    console.log("server started on port 3000");

 })