

module.exports = (app, db) => {
    app.get('/sendToDB', (req, res) => {
        console.log(req)
        // res.send('hello')
    })
}