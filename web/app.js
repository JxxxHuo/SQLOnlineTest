//this file should run in server side with command
//node app.js    
//to use different port, a proxy infront of this server is needed

const express = require("express");
const path = require("path");
const fs=require('fs');
  
const app = express();
const port = process.env.PORT || 3000;

// Setting path for public directory 
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
  
// Handling request 
app.post("/request", (req, res) => {
   t = new Date();
   var tdate = (t.getMonth() + 1) + '_' + t.getDate() + '_' + t.getHours() + '_' + t.getMinutes() + '_' + t.getSeconds();
   var data={
            name: req.body.name,
            stuID: req.body.stuID,
            finger:req.body.finger,
            time: tdate,
            questions:req.body.questions           
   };
   
   filePath= __dirname+'/data/'+data.stuID+'-'+tdate+'.txt';
   var writer = fs.createWriteStream(filePath);
   //fs.appendFile(filePath,res.json().toString());
   writer.write(JSON.stringify(data));
   //var t=new Date();
   var record=filePath+' file created at'+t.toString();
   console.log(record);
   //res.status(201).send('');
   fs.appendFile(__dirname+'/log.txt',record, function(err){
     if (err) 
         throw err;
   })
   res.end("yes");
})
  
// Server Setup
app.listen(port, () => {
   console.log(`server is running at ${port}`);
});
