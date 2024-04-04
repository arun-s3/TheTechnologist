require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000||process.env.PORT;

app.set("view engine", "ejs");
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "./layouts/main");



app.use(express.static("public"))

app.use("/", require("./Server/Routes/main.js") )
app.listen(PORT,()=>{console.log(`Listening to port ${PORT}`)});