const mongoose = require('mongoose');
const mongoURI='mongodb+srv://rabiasultana:dashboard@cluster0.3laxvgz.mongodb.net/Dashboard'
const connectToMongoDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
    }
  };
  
  module.exports = connectToMongoDB;