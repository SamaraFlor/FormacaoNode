const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get("/", (req,resp)=> {
    resp.render("index");
})

app.listen(8080,() => {
    console.log("rodandoo");
});