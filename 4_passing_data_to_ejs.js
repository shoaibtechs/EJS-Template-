const express =  require("express");
const app = express();
const path =  require("path");

const port = 8080;

app.set("view engine ", "ejs");

app.set("views", path.join(__dirname, "./views"));


app.listen(port, ()=>{

    console.log(`The Server is listening at port ${port}`);

})


app.get("/rolldice", (req, res)=>{

    
    // We are assuming that ye data humara database se araha hai  
    
    let diceVal =  Math.floor(Math.random()* 6) + 1 ;
    
    res.render("4_roll_dice.ejs", {num : diceVal});

    




})