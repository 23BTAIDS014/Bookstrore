const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const connectDB =require("./backend/config/db");

const bookRoutes=require("./backend/routes/bookRoutes");
dotenv.config()

connectDB();

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/books",bookRoutes);

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

