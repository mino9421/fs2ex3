const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    
    restaurant_id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true,
      trim: true,
      lowercase:true
    },

    cuisine: {
      type: String,
      required: true,
      trim: true,
      lowercase:true
    },

    city: String

});

//Create Model
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;