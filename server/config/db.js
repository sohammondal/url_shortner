const mongoose = require("mongoose");
const mongoURI = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("MONGODB CONNECTED.....");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
