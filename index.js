const express = require("express");
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express
console.log("updated 12-7-20 7:45am");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
mongoose.connect('mongodb://localhost:27017/test',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
},
(err) => {
  if (err) throw err;
  console.log("MongoDB connection established");
}
);


// set up routes

app.use(fileUpload());
app.use("/users", require("./routes/userRouter"));
