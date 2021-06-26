  const connectDB = require('./db/connect.js')
  const express = require('express')
  const  app = express() 
  const tasks = require('./routes/tasks')
  require('dotenv').config()



  //middleware
  app.use(express.static('./public'))
  app.use(express.json())



  app.use('/api/v1/tasks', tasks)


  const port = 3000

  const start = async()=>{
    try {
      await connectDB(process.env.MONGO_URL)
      app.listen(port, console.log("server is working..."))

    } catch (error) {
      console.log(error)
    }
  }

  start()
 
    