# sqlite3-promise

ES6 Promise-based interface to the sqlite3 module. The `sqlite3-promise` module exports the `Database`.

## Installation

```
npm install sqlite3-promise
```

## Usage

### Database.connect

```js
const Database = require('sqlite3-promise');

const db = Database();
db.connect('app.db');
```

- args : `filename: string`
- return : `void`

### Database.runQuery

```js
const query = "INSERT INTO user(name, email) values(?, ?)";
const params = ["choewy", "choewy32@gmail.com"];

db.runQuery(query, [])
    .then(() => {
        console.log('success');
    })
    .catch((err) => {
        console.log(err)
    });
```

- args : `query: string`, `params?: []`
- return : `Promise<void | err>`

### Database.getOneQuery

```js
const query = "SELECT * FROM user WHERE name = ?";
const params = ["choewy32"];

db.getOneQuery(query, params)
    .then((row) => {
        console.log(row);
    })
    .catch((err) => {
        console.log(err);
    });
```

- args : `query: string`, `params?: []`
- return : `Promise<object | err>`

### Database.getAllQuery

```js
const query = "SELECT * FROM user";
const params = [];

db.getOneQuery(query, params)
    .then((rows) => {
        console.log(rows);
    })
    .catch((err) => {
        console.log(err);
    });
```

- args : `query: string`, `params?: []`
- return : `Promise<object[] | err>`