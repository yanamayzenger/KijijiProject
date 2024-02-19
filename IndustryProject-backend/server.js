require("dotenv").config();
const express = require("express");
const cors = require("cors");
const safePlacesRoutes = require("./routes/routes");

const app = express();
const port = process.env.SERVER_PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api", safePlacesRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
