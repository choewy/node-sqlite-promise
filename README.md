# node-sqlite-promise

ES6 Promise-based interface to the sqlite3 module. The `node-sqlite-promise` module exports the `Database`.

## Installation

```
npm install node-sqlite-promise
```

## Usage

### Database.connect

```js
const Sqlite3Promise = require('node-sqlite-promise');

const db = new Sqlite3Promise('app.db');
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

# License(MIT)

Copyright (c) 2022 최원영(choewy)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
