const express =  require("express");
const app = express();
const path =  require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const port = 8080;



app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);

})

app.get("/", (req, res)=>{

    res.send("You contacted the root path");



})






app.get("/insta/:username", (req, res)=>{


    let {username} =  req.params;
    let jsonData =  require("./data.json");
    let data =  jsonData[username];


    if(data)
    {

        res.render("8_instagram_template", {data});
  

    }


    else{

        res.render("8_error");

    }
  
    





})