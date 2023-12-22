const express = require("express");
const connection = require("./database/server");
const cors = require("cors");
const SchoolModel = require("./models/schoolModel");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/school", async (req, res) => {
  try {
    let data = await SchoolModel.find();
    res.status(200).send({ msg: "data fetched", data: data });
  } catch {
    res.send("something went wrong");
  }
});

app.post("/schooldata", async (req, res) => {
  let data = req.body;

  try {
    let responseData = new SchoolModel(data);
    await responseData.save();

    res.status(200).send({ msg: "school data added" });
  } catch {
    res.send("something went wrong");
  }
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to database");
  } catch {
    console.log("error to connct to db");
  }
  console.log(`server is running on port ${PORT}`);
});
