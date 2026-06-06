require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path =require("path");

const toolsRoutes = require("./routes/toolsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tools",toolsRoutes);
app.use(

  "/compressed",

  express.static(
    path.join(
      __dirname,
      "uploads/compressed"
    )
  )

);

module.exports = app;