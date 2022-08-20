import express from "express"
import path from 'path';
import bodyParser from "body-parser"

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("build"))



app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,"build",'index.html'))
});

app.post("/addmovie", (req,res)=>{
  console.log(res.body)
})

app.listen(process.env.PORT || 5000 , () => {
    console.log(`Server listening on `);
  });


  