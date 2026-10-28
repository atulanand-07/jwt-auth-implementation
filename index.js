import express from "express"
import dotenv from "dotenv"

import { connectDB } from "./config/db.js"
import authRoutes from "./routes/auth.routes.js"
import privateRoutes from "./routes/private.routes.js"

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())

// routes
app.use("/auth", authRoutes);
app.use("/private", privateRoutes);


connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
    
    })
}).catch((error)=>{
    console.log("Error connecting to Database.");
})


