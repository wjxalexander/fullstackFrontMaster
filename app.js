const express = require("express");
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!,i am port 3000, i am in node 12'))
app.listen(port, ()=>console.log(`Example app listening on port ${port}!`));
