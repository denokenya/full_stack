// import express
import express from "express";
//import db
import db from "./config/database.js";
//import prouctRoutes
import productRoutes from "./routes/index.js";
//import cors
import cors from "cors";

const app =express();

try{
    await db.authenticate();
    console.log('Databse Connected...');

}catch (error){
    console.error('Connection error:',error);
}

app.use(cors());
app.use(express.json());
app.use('/products',productRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));

