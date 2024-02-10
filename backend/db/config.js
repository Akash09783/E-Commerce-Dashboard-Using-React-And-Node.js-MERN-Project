
const mongoose = require('mongoose')
const url = `mongodb+srv://dashboard:Realme123@cluster1.qml7q4x.mongodb.net/`;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

