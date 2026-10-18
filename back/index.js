const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");

const app=express();
dotenv.config();

app.get("/",(req,res)=>
{
    res.send("hello from backend");
});

async function connectDb () {
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connection base de donnéé établie avec succès!!!");

    const port=process.env.PORT || 3000 
    app.listen(port,() =>
    {
        console.log("le port utilisé est:"+port);
    })}
    catch{
        console.log("erreur de connexion!!"+Error.message);
        process.exit(1);
    }
}
connectDb();
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) {
        console.error("Erreur lors du démarrage du serveur :", err);
    } else {
        console.log("Serveur en écoute sur http://localhost:" + port);
    }
});