import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import  myUserRoute from "./routes/MyUserRoute"
// db connection 
mongoose.connect(process.env.MONGO_DB as string)
.then(()=>console.log("Database connected successfully")
);

const app = express();
app.use(express.json());
app.use(cors());


app.get("/health" , async(req:Request, res: Response)=>{
  res.send({message: "Health Okay~"});
})

app.use("/api/my/user" , myUserRoute);

app.listen(8000, () => {
  console.log("The server running port 8000");
});
