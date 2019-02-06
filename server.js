const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper("getCurrentYear",()=>{
    return new Date().getFullYear();
})
app.set("view engine","hbs");
app.use(express.static(__dirname+"/public"));
app.use((req,res,next) =>{
    var now = new Date().toString();
    console.log(now);
next();
});
app.get("/",(req,res)=>{
    res.render("welcome.hbs",{
        name:"Pankaj's Node Js website",
        purpose:"Learning node Js"
    })
});

app.get("/about", (req,res)=>{
    res.render("about.hbs",{
        pageTitle:"About Page"
    });
});

app.get("/projects",(req,res) =>{
    res.render("projects.hbs",{
        pageTitle:"Projects"
    });
});

app.listen(port);