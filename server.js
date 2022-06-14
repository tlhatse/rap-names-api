const express = require("express");
const app = express()
const PORT = 2929

const rappers = {
    '21 savage' : {
        'birthName': 'Sheyaa Bin Abraham',
        'age': 29,
        'birthLocation': 'London, England'
    },
    'birdman' : {
        'birthName': 'Bryan Christopher Brooks',
        'age': 53,
        'birthLocation': 'New Orleans, Louisiana'
    },
    'unknown' : {
        'birthName': 'Unknown',
        'age': 0,
        'birthLocation': 'Unknown'
    }
}


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:artist', (req, res)=> {
    const artistName = req.params.artist.toLowerCase()

    if (rappers[artistName]) {
        res.json(rappers[artistName])
    } else {
        res.json(rappers[unknown])
    }

    res.json(rappers)
})
app.listen(PORT, ()=> {
    console.log(`The server is now running on ${PORT}! Start coding!`);
})