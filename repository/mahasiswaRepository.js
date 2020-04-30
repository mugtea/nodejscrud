var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'nodejs',
    user: 'root',
    password: ''
});

db.connect();

var dbQuery = {
    getData: 'select * from mahasiswa',
    addData: 'insert into mahasiswa set ?',
    updateData: 'update mahasiswa set ? where ?',
    deleteData: 'delete from mahasiswa where ?'
}

function getProcess(process, param) {
    switch (process) {
        case 'get':
            return dbExec(dbQuery.getData, param); break;
        case 'add':
            // console.log(dbQuery.addData, param);
            return dbExec(dbQuery.addData, param); break;
        case 'update':
            return dbExec(dbQuery.updateData, param); break;
        case 'delete':
            // console.log(process, dbQuery.deleteData, param)
            return dbExec(dbQuery.deleteData, param); break;
        default:
            return false;
            break;
    }
}

function dbExec(query, params) {
    return new Promise(function (resolve, reject) {
        db.query(query, params , function (err, rows) {
            if (err) {
                return reject(err);
            } else {
                return resolve(rows);
            }
        })
    })
}


module.exports = {
    getProcess: getProcess
}