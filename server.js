
const port =process.env.PORT ||  5000

const express = require("express")
const app = express()
// const cors = require("cors")
const dbConnection = require('./db')
 app.use(express.json())
// app.use(cors())
 app.use('/api/cars/' , require('./routes/carsRoute'))
 app.use('/api/users/' , require('./routes/usersRoute'))
 app.use('/api/bookings/' , require('./routes/bookingsRoute'))

const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('rent-a-car-app/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'rent-a-car-app/build/index.html'));

    })

}

app.get('/', (req,res)=> res.send('Hello World'))
app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))