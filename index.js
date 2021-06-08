const express = require('express')
const path = require('path')
const routeIndex = require('./routes/index')
const routeTabuada = require('./routes/tabuada')
const routeContato = require('./routes/contato')

const app = express()
const port = process.env.PORT || 3000

/* Settings */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

/* Routes */
app.use('/', routeIndex)
app.use('/tabuadas', routeTabuada)
app.use('/contato', routeContato)

/* Server Online */
app.listen(port, ()=>console.log('Tabuada - Server Online'))