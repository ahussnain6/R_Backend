require("dotenv").config();
const express = require("express");
const dbConnect = require("./utils/Db");
const cors = require("cors");
const routerpro = require("./routes/proute");
const port = process.env.PORT || 5500;

const corsOptions = {
  origin: "*", 
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/user", routerpro);
app.get("/", (req, res) => {
  res.end("Running Backend Successfully");
});

dbConnect()
  .then(() => {
    app.listen(port, () => {
      // console.log(`Server is listening at Port ${port}`);
    });
  })
  .catch(err => {
    // console.error("Database connection error:", err);
  });


module.exports = app;
