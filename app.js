const express = require(`express`);
const app = express();
const routes = require("./controllers/routes");
require(`dotenv`).config();
const port = process.env.port || 3000;

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = router;

//fs allows you to modify--do some digging
