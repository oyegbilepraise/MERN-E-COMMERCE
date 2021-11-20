const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config();

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
const stripeRoute = require('./routes/stripe')

const URL = process.env.URL

app.use(express.json());

mongoose.connect(URL).then(() => {
    console.log('DB connected success');
}).catch((err) => console.log(err));


app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('./api/carts', cartRoute)
app.use('./api/checkout', stripeoute)

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is runnung');
});