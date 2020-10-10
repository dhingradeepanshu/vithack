const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/covidstation',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log('DB connection Successful!')
}).catch(()=>{
    console.log('DB connection Unsuccessful!')
})