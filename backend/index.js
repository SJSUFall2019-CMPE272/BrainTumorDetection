require('dotenv').config();

const app = require('./app');

const classifyBrain = require("./routes/classifyBrain");

app.use("/classify/brain", classifyBrain);

const port = process.env.PORT;
var server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;