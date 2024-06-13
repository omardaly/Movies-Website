const express = require('express')
const app = express()
const cors = require('cors')
const cookies = require('cookie-parser');
require("dotenv").config();
const PORT = process.env.PORT;
const DB = process.env.DB;


app.use(
    express.json(),
    express.urlencoded({extended:true}),
    cors({credentials:true , origin:'http://localhost:5173'})
);
app.use(cookies())
require('./config/movies.config')(DB)
require('./routes/movies.routes')(app)
require('./routes/users.routes')(app)

app.listen(PORT,()=>console.log(`SERVER IS RUNNING ON PORT ${PORT} ✅✅✅✅`))