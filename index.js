const configs = require('./config/config')
const connection = require('./infra/connection')
const tables = require('./infra/tables')

connection.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('[Start Connection]')

        tables.init(connection)
        const app = configs()
        app.listen(3000, () => console.log('[Server running - 3000]'))
    }
})


