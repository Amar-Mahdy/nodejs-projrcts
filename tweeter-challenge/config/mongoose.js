const mongoose = require('mongoose')
const db = 'mongodb+srv://ammar:ammar1993@nodejoo.eaphm.mongodb.net/ammar?retryWrites=true&w=majority'

mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(() => console.log('mangoo liks you Ammar'))
.catch(err => console.log(err))