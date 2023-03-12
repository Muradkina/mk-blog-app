import express from "express";
import dotenv from "dotenv"
import conn from './db.js';


//gizlemek istediğim şifreleri env bağlantısı sağladım
dotenv.config();

//MongoDb Bağlantısı
conn()

const app = express();
const port = process.env.PORT || 3000


//ejs template engine
app.set('view engine', 'ejs');


//static files middleware
app.use(express.static('public'));


app.get('/',  (req, res) => {
    res.render('index');
  }); 
  

  app.get('/about',  (req, res) => {
    res.render('about');
  }); 

app.listen(port, () => {
  console.log(`Uygulama ${port} numaralı portta çalışıyor`);
});
