import express from "express";
import dotenv from "dotenv"
import conn from './db.js';
import pageRoute from './routes/pageRoute.js'
import photoRoute from './routes/photoRoute.js'



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

app.use(express.json());



//routes
app.use("/",pageRoute)
app.use("/photos",photoRoute)



/* app.get('/',  (req, res) => {
    res.render('index');
  }); 
  

  app.get('/about',  (req, res) => {
    res.render('about');
  });  */

app.listen(port, () => {
  console.log(`Uygulama ${port} numaralı portta çalışıyor`);
});
