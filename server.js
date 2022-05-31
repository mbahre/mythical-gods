const app = require(`${__dirname}/app`);
const mongoose = require("mongoose");

const localDB = async function () {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL);
    console.log("Connected to the DB successfully");
  } catch (err) {
    console.log(err);
  }
};
localDB();

const port = process.env.PORT;
app.listen(port, function () {
  console.log(`App is running on port ${port}...`);
});
