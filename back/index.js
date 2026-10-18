const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");

const app=express();
dotenv.config();

app.get(" / ",(req,res)=>
{
    res.send("hello from backend");
});

async function connectDb () {
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connection base de donnéé établie avec succès!!!");

    const port=process.env.PORT;
    app.listen(port,() =>
    {
        console.log("le port utilisé est:"+port);
    })}
    catch{
        console.log("erreur de connexion!!");
        process.exit(1);
    }
}
connectDb();