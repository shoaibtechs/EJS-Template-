const express =  require("express");
const app = express();
const path =  require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const port = 8080;

app.listen(port, ()=>{

    console.log(`The server is listening at port ${port} `);

})


app.get("/", (req, res)=>{

    res.send("You contatced the root path ");

})


app.get("/rolldice", (req, res)=>{


    let diceVal =  Math.floor(Math.random()* 6) + 1 ;

    res.render("6_conditionals_template", {diceVal});



})



