

module.exports = (app, db) => {

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.post('/sendToDB', (req, res) => {
        db.connect((err) => {
            if (err) {
                throw err
            }
            console.log("Connected to DB!!!");
        })
    })
}