const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.js');
const mentorRoutes = require('./Routes/mentorRoute.js');
const studentRoutes = require('./Routes/studentRoute.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());


mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// username : vengadesanvengadesan16107054
// Password : LPw7i1jdnM84K6Ts
//mongodb+srv://vengadesanvengadesan16107054:<password>@cluster0.opajpyf.mongodb.net/



// mongoose.connect(
//   'mongodb+srv://vengadesanvengadesan16107054:LPw7i1jdnM84K6Ts@cluster0.opajpyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
//   {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true, 
//     dbName:'StudentApiTask',
//   }
// )
// .then(()=>console.log('mongodb is connnected'))
// .catch((err)=>console.log(err.message));