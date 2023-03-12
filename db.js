// db.js
import mongoose from 'mongoose';

const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: 'NodejsBlog-App',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }) .then(() => {
        console.log('MongoDb Bağlantı gerçekleşti !');
      })
      .catch((err) => {
        console.log(`DMongoDb Bağlantı Hatası.:, ${err}`);
      });
};

export default conn;
