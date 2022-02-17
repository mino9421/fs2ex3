const express = require('express');
const mongoose = require('mongoose');
const ResRoutes = require('./routes/RestaurantRoutes');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://armen:mino199421@comp3123.flrd9.mongodb.net/restaurant?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/restaurants',ResRoutes);

app.listen(8081, () => { console.log('Server is running...') });