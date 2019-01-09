

module.exports = (app, db) => {

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.post('/sendToDB', (req, res) => {
        let { id, name, type, stats, image } = req.body
        console.log(stats)
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
    })
}