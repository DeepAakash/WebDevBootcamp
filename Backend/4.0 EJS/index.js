import express from "express";

const app=express();
const port=3000;

app.get("/", (req, res)=>{
    const d = new Date();
    var day = d.getDay();

    var first="a weekday";
    var sec="it's time to work hard";
    if(day===0 || day===6){
        first="the weekend";
        sec="it's time to have some fun";
    }

    res.render("index.ejs",
    {
        first:first,
        sec:sec,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});  
