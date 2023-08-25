// get the express module
const express = require("express")
const app = express()


// get the necessary imported modules from different file
const userRoutes = require('./routes/test');
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/uploads');

app.use(express.json())
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', uploadRoutes)

const port = 8080

app.listen(port, ()=>{
    console.log("Server is running at "+ port);
})
