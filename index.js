const sqlite3 = require('sqlite3');

class Sqlite3Promise {
    constructor(filename) {
        this.db = new sqlite3.Database(filename);
    };

    getAllQuery = (query, params = []) =>
        new Promise((resolve, reject) => {
            this.db.all(query, params, (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });

    getOneQuery = (query, params = []) =>
        new Promise((resolve, reject) => {
            this.db.get(query, params, (err, row) => {
                if (err) reject(err);
                resolve(row);
            });
        });

    runQuery = (query, params = []) =>
        new Promise((resolve, reject) => {
            this.db.run(query, params, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
};

module.exports = Sqlite3Promise;