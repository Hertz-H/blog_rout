const express=require('express');
const url=require('url');
const app = express();
const path =require('path');
app.listen(3003);
console.log("start Server");
app.set('views' , 'public');
app.set('view engine' , 'ejs');
app.use(express.static('public'));


app.get("*",(req,res)=>{
    if(req.url=="/home"){
        res.render("home");
        res.end();
   
    }
    else if(req.url == "/blog"){
        res.render("blog");
        res.end();
      
    }
    else if(req.url == "/contact"){
        res.render("contact");
        res.end();
       
    }
    else if(req.url == "/about"){
        res.render("about");
        res.end();
     
    }
    else if(req.url == "/admin?role=admin"){
        res.write("Hello Admin");
        res.end();
      
    }
    else if(req.url == "/admin?role=admin"){
        res.write("Hello Admin");
        res.end();
    
    }
    else if(req.url.startsWith ("/admin?") ){
        res.write("login page");
        res.end();
       
    }
    
   else{
       res.statusCode=404;
    res.write("404");
    res.end(); 
   }
    
});




