var express = require('express')
var ejs = require('ejs')
var readfile = require('./read')
var config = require('./package.json')

var app = express()

app.set('views', __dirname + '/view');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

var publicFolder = config.publicFolder
var port = config.port
app.use(express.static('assets'));
for (var i in publicFolder) {
    app.use(express.static(publicFolder[i]))
}

app.get('/', function (req, res) {
    var pathQ = req.query["path"]
    var index = req.query["index"]
    var slider = req.query["slider"]
    //if (!pathQ) pathQ = '/'+publicFolder
    if (!index) {
        res.render('index', { data: publicFolder });
        return;
    }
    if (!pathQ) pathQ = '/'
    pathQ = pathQ.replace(/\\/g, '\/')
    readfile.readFolder(pathQ, index, function (error, data) {
        let pathBack = pathQ.substring(0, pathQ.lastIndexOf('/'))
        data.pathBack = pathBack
        data.pathQ = pathQ
        data.index = index
        if (error) {
            res.render('error', { title: pathQ, data: data });
            return
        }
        if (slider == 1) {
            res.render('slider', { title: pathQ, data: data });
        } else {
            res.render('main', { title: pathQ, data: data });
        }
    })

})


app.listen(port)
