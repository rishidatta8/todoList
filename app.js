import express from "express";
import ejs from "ejs";
import {Date,Day} from "./date.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
const items = [];
const workItems = [];

app.get("/",(req,res)=>{
    const day = Date();
    res.render("list",{title: day, items: items});
});

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
});

app.post("/",(req,res)=>{
    const newItem = req.body.newItem;
    if(req.body.button === "Work List"){
        workItems.push(newItem);
        res.redirect("/work");
    }else{
        items.push(newItem);
        res.redirect("/");
    }
});

app.get("/work",(req,res)=>{
    res.render("list", { title: "Work List", items: workItems });
});

app.get("/about",(req,res)=>{
    res.render("about");
});