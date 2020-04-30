var mhsRepository = require('../repository/mahasiswaRepository');
var path = require('path')

exports.test = function (req, res) {
    res.end('you got ittt!!');
}

exports.home = function (req, res) {
    mhsRepository.getProcess('get').then(function (result) {
        res.render('index', {
            data: result
        })
    }, function (error) {
    });
}

exports.delete = (req, res) => {
    mhsRepository.getProcess('delete', [{ 'id': req.params.id }]).then(() => {
        res.redirect('/api');
    })
}

exports.save = function (req, res) {
    if (req.body.id && req.body.id != "") {
        mhsRepository.getProcess('update', [req.body, { 'id': req.body.id }]).then(() => {
            res.redirect('/api');
        })
    } else {
        mhsRepository.getProcess('add', req.body).then(() => {
            res.redirect('/api');
        })
    }

}