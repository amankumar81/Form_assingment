const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const uri = "mongodb://localhost:27017/CyberNautsformAssingment";
const client = new MongoClient(uri, { useUnifiedTopology: true });

app.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    await client.connect();
    const db = client.db("CyberNautsformAssingment");
    const collection = db.collection("collections");

    const check = await collection.findOne({ username: username });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    console.error(e);
    res.json("fail");
  } finally {
    client.close();
  }
});

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, username, password, confirmPassword } =
    req.body;

  const data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  };

  try {
    await client.connect();
    const db = client.db("CyberNautsformAssingment");
    const collection = db.collection("collections");

    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await collection.insertOne(data);
      res.json("notexist");
    }
  } catch (e) {
    console.error(e);
    res.json("fail");
  } finally {
    client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
