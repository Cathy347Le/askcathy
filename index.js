const express = require("express");
const app = express();
const parser = require("body-parser");

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));

app.use(require("./routes/index"));

app.listen(5000, () => console.log("listening on port 5000"));
