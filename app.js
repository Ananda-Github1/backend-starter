const express = require('express')
const app = express()

// import bookRoutes from "./routes/bookRoutes"
const bookRoutes = require('./routes/bookRoutes')

app.use(express.json())


app.use('/api/v1',bookRoutes)

app.get('/',(req,res) =>{

    res.send(`Backend server is running`)
})


const PORT = 8000
app.listen(PORT,()=>{

    console.log(`server is running at port 8000`)
})