import express from "express";




const app = express();
const port = 3333;


app.get('/',  (req, res) => {
    res.send('index');
  }); 
  

app.listen(port, () => {
  console.log(`Uygulama ${port} numaralı portta çalışıyor`);
});
