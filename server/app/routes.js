

module.exports = (app, db) => {

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.post('/sendToDB', (req, res) => {
        let { id, name, type, stats, image } = req.body
        type = JSON.stringify(type);
        stats = JSON.stringify(stats);
        console.log("Connected to DB!!!");
        let sql = "SELECT `id` FROM `Pokemon` WHERE `id` = " + id
        db.query(sql, (err, result, fields) => {
            if (err) {
                throw err
            }
            if (result.length > 0) {
                console.log('id is taken');
            } else {
                let sql = "INSERT INTO `Pokemon`(`id`, `name`, `type`, `stats`, `image`) VALUES (" + id + ",'" + name + "','" + type + "','" + stats + "','" + image + "')";
                db.query(sql, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    console.log("saved " + name + " to db")
                })
            }
        });

    });

    app.get('/pokemonAPI', (req, res) => {
        let sql = "SELECT * FROM `Pokemon` WHERE id > 0"
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/steel', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%steel%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/grass', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%grass%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/poison', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%poison%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/flying', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%flying%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/normal', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%normal%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/fighting', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%fighting%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/ground', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%ground%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/rock', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%rock%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/bug', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%bug%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/ghost', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%ghost%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/water', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%water%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/fire', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%fire%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/electric', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%electric%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/psychic', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%psychic%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });
    app.get('/pokemonAPI/ice', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%ice%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.get('/pokemonAPI/dragon', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%dragon%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });
    app.get('/pokemonAPI/dark', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%dark%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });
    app.get('/pokemonAPI/fairy', (req, res) => {
        let sql = "SELECT * From `Pokemon` WHERE type LIKE '%fairy%'";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });


}