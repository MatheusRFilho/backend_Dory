const User = require('../models/user')

module.exports = app => {
    app.post('/register', (req, res) => {
        const user = req.body
        User.register(user, res)
    })

    app.post('/login', (req, res) => {
        const user = req.body
        User.login(user, res)
    })
}