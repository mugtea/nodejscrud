const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser());

const routeApp = require('./routes/route')
app.use("/api", routeApp) //ini biar routingnya ada tambahan depanny api/.../

var swig = require('swig');
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

//register css folder ... /cssfiles if custom folderingname
// app.use('/cssfiles', express.static(__dirname + '/css'))
// app.use('/jsfiles', express.static(__dirname + '/js'))
// app.use('/viewfiles', express.static(__dirname + '/template'))

app.use(express.static(__dirname + '/'));
app.listen(1233, function () {
    console.log('server running')
})