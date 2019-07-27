const express = require("express"),
  app = express(),
  cors = require("cors"),
  mongoose = require("mongoose"),
  path = require("path"),
  PORT = process.env.PORT || 5000,
  mongoURI = process.env.mongoURI;

// Connect to Mongo
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log("MONGODB CONNECTED..."))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

// Use Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("SERVER LISTENING ON PORT", PORT));
