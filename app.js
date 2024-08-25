const express = require ("express");
const app = express();
const cors =require("cors")
require("./conn/conn")
const auth =require("./routes/auth");
const list =require("./routes/list");
app.use(express.json());
app.use(cors())

const cors = require('cors');
app.use(cors({
  origin: 'https://tranquil-custard-a7c975.netlify.app/', // Replace with your Netlify domain
  credentials: true,
}));

app.get("/",(req,res) => {
    res.send("hello");
});


app.use("/api/v1",auth);
app.use("/api/v2",list);


app.listen(process.env.PORT,() => {
    console.log(`Server Started at port ${process.env.PORT}`);
})
