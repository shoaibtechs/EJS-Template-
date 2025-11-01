const express = require("express");
const app = express();

const port = 8080;

const path =  require("path");

app.set("views", path.join(__dirname, "./views"));

app.set("view engine", "ejs")



app.listen(port, ()=>{

    console.log(`The Server is listening at port ${port}`)


})


app.get("/", (req, res)=>{

    res.send("You contacted the root path");


})




app.get("/home", (req, res)=>{

    res.render("2_interpolation");


})