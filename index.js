import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/blog",(req,res) =>{
    res.render("blog.ejs");
});

app.post("/submit-blog",(req,res) =>{
    const name = req.body["title"];
    res.render("seeing.ejs",{heading: name});
});

app.get("/edit",(req,res) => {
    res.render("blog.ejs");
});
app.get("/",(req,res) =>{
    res.render("index.ejs");
});

app.post("/submit-form",(req,res)=>{
    res.redirect('/');
});


app.listen(port, () =>{
    console.log(`the server is running on port ${port}`);
});
