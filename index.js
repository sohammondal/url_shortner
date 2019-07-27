const express=require('express'),
      app = express(),
      cors = require('cors'),
      PORT = process.env.PORT || 5000,
      connectDB = require('./config/db');

connectDB();
app.use(cors());
app.use(express.json());
app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));
app.listen(PORT,()=>console.log('SERVER LISTENING ON PORT',PORT));

