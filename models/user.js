const connection = require('../infra/connection')

const moment = require('moment')

class User {
    register(user, res) {
        const date = moment(user.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')


        const email = `SELECT * FROM res_responsavel WHERE res_email = '${user.email}'`

        connection.query(email, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                if (result.length > 0) {
                    res.status(400).send('Usuario já cadastrado')
                } else {
                    const sql = `INSERT INTO pes_pessoa (pes_nome, pes_nascimento) values ('${user.name}', '${date}')`

                    connection.query(sql, (error, result) => {
                        if (error) {
                            console.log(error)
                            res.status(400).json(error)
                        } else {
                            const sql2 = `INSERT INTO res_responsavel (res_email, res_senha, pes_codigo) VALUES ('${user.email}', '${user.password}', '${result.insertId}')`
                            connection.query(sql2, (error, result) => {
                                if (error) {
                                    console.log(error)
                                    res.status(400).json(error)
                                } else {
                                    console.log(result)
                                    res.status(201).json(user)
                                }
                            })
                        }
                    })
                }
                
            }
        })
    }

    login(user, res) {
        const sql = `SELECT * FROM res_responsavel WHERE res_email = '${user.email}' AND res_senha ='${user.password}'`

        connection.query(sql, (error, result) => {
            if (error) {
                console.log(error)
                res.status(400).json(error)
            } else {
                const info = result[0]
                res.status(200).json(info)
            }
        })
    }

    emailAlreadyExist(email) {
        
    }
}

module.exports = new User