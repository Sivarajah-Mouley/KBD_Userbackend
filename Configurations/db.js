require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/ecom',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )

    console.log('Database connection is SUCCESS')
  } catch (error) {
    console.error('Database connection is FAIL')
    process.exit(1)
  }
}

module.exports = {connectDB}
