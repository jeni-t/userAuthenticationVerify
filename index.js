const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   
  } catch (error) {
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
  });
  
  app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = connectDB;
