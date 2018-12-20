

module.exports = (app, db) => {

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.post('/sendToDB', (req, res) => {
        const { id, name, type, stats } = req.body
        db.connect((err) => {
            if (err) {
                throw err
            }
            console.log("Connected to DB!!!");
            let sql = "INSERT INTO `Pokemon`(`id`, `name`, `type`, `stats`) VALUES (" + id + "," + name + "," + type + "," + stats + ")";
            
        });
    })
}