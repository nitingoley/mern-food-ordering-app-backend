import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import {v2 as cloudinary} from "cloudinary";

// db connection
mongoose
  .connect(process.env.MONGO_DB as string)
  .then(() => console.log("Database connected successfully"));



// cloudinary config  
cloudinary.config({
cloud_name: process.env.CLOUDINARY_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors({
   origin: "*",
    credentials: true, 
}));

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health Okay~" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);

app.listen(8000, () => {
  console.log("The server running port 8000");
});
