const { application } = require("express");
const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

// định nghĩa các tuyến đường 
app.get("/", (req, res) => {
    for(let i = 0 ; i < 10 ; i++) {
        console.log(i)
    }
    res.send('hello world')
}) 

// app được khởi tạo từ express() và nó trả về một cái port
app.listen(port, () =>
  console.log(`Example app listening at http://${hostname}:${port}`)
);
  