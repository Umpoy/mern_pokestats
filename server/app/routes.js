

module.exports = (app, db) => {

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.post('/sendToDB', (req, res) => {
        let { id, name, type, stats } = req.body
        type = JSON.stringify(type);
        stats = JSON.stringify(stats);
        db.connect((err) => {
            if (err) {
                throw err
            }
            console.log("Connected to DB!!!");
            let sql = "SELECT `id` FROM `Pokemon` WHERE `id` = " + id
            db.query(sql, (err, result, fields) => {
                if (err) {
                    throw err
                }
                if (result.length > 0) {
                    console.log('id is taken');
                } else {
                    let sql = "INSERT INTO `Pokemon`(`id`, `name`, `type`, `stats`) VALUES (" + id + ",'" + name + "','" + type + "','" + stats + "')";
                    db.query(sql, (err, result) => {
                        if (err) {
                            throw err;
                        }
                        console.log("saved to db")
                    })
                }
            });
        });
    })
}