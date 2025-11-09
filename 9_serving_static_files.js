const express =  require("express");
const app = express();
const path =  require("path");


app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/style")));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));


const port =  8080;

app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);

})


app.get("/", (req, res)=>{

    res.render("9_static_files_template");


})