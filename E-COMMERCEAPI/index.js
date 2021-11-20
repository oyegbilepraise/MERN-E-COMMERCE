const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config();

const UserRoute = require('./routes/user')
const authRoute = require('./routes/auth')

const URL = process.env.URL

app.use(express.json())

mongoose.connect(URL).then(() => {
    console.log('DB connected success');
}).catch((err)=> console.log(err))


app.use('/api/users', UserRoute);
app.use('/api/auth', authRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is runnung');
});