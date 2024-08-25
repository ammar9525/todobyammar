const express = require ("express");
const app = express();
const cors =require("cors")
require("./conn/conn")
const auth =require("./routes/auth");
const list =require("./routes/list");
app.use(express.json());
app.use(cors())



app.get("/",(req,res) => {
    res.send("hello");
});


app.use("/api/v1",auth);
app.use("/api/v2",list);


app.listen(process.env.PORT,() => {
    console.log(`Server Started at port ${process.env.PORT}`);
})

app.use(cors({
  origin: 'https://friendly-biscotti-f4f84f.netlify.app/', // Replace with your Netlify domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization',
}));
