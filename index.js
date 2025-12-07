const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hallo");
});

app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
