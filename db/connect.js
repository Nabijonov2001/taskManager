const mongoose = require('mongoose')



const connectDB = (url)=>{
    return mongoose.connect(url, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify:true})
    .then(()=>{
        console.log('Mongodbga ulanish bajarildi...')
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports = connectDB



