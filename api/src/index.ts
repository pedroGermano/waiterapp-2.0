import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('conectado ao mongo'))
  .catch(() => console.log('Error ao conectar'));

const port = 3001;
app.listen(3001, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
