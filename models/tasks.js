const mongoose = require('mongoose')



const TaskSchema =  new mongoose.Schema ({

    name: {
        type:String,
        required:[true, 'nom yozilishi kerak'],
        trim:true,
        maxlenght:[20, 'harflar soni 20 dan oshmasligi kerak']
    } ,
    completed: {
        type:Boolean,
        default:false 
    }
})

module.exports = mongoose.model("Task", TaskSchema)