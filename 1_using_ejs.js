const express =  require("express");
const app = express();

const port = 8080;



app.set("view engine", "ejs");


app.listen(port, ()=>{


    console.log(`The server is listening at port ${port}`);


})


app.get("/", (req, res)=>{

    res.send("You contacted the Root Path ");


})


app.get("/home", (req, res)=>{

    res.render("home");



})
