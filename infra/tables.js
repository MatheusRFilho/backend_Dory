class Tables {
    init(connection) {
        this.connection = connection

        this.createPeoples()
        this.createAdress()
        this.createResponsavel()
        // this.createDesaparecidos()
        // this.createContact()
        // this.createCases()
    }

    createPeoples() {
        const sql = 'CREATE TABLE IF NOT EXISTS pes_pessoa (pes_codigo int NOT NULL PRIMARY KEY AUTO_INCREMENT,pes_cpf longtext DEFAULT NULL,pes_rg longtext DEFAULT NULL, pes_nome varchar(30) NOT NULL, pes_nascimento datetime NOT NULL,pes_sexo char , pes_cutis longtext, pes_tipo longtext )'; 

              this.connection.query(sql, (error) => {
                  if(error) {
                      console.log(error)
                  } else {
                      console.log('[Creating Peoples Table]')
                  }
              })
    }

    createAdress() {
        const sql = 'CREATE TABLE IF NOT EXISTS end_endereco (end_codigo int NOT NULL PRIMARY KEY, end_logradouro longtext NOT NULL,end_bairro longtext NOT NULL,end_cidade longtext NOT NULL,end_numero longtext NOT NULL,end_estado longtext NOT NULL,pes_codigo int(11) NOT NULL,CONSTRAINT fk_pesAdress FOREIGN KEY (pes_codigo) REFERENCES pes_pessoa (pes_codigo))'
              
              this.connection.query(sql, (error) => {
                  if(error) {
                      console.log(error)
                  } else {
                      console.log('[Creating Adress Table]')
                  }
              })
    }

    createResponsavel() {
        const sql = 'CREATE TABLE IF NOT EXISTS res_responsavel (res_codigo int NOT NULL PRIMARY KEY AUTO_INCREMENT, res_email VARCHAR(30), res_senha VARCHAR(30) , res_celular VARCHAR(30) , pes_codigo int NOT NULL, CONSTRAINT fk_pesResponsavel FOREIGN KEY (pes_codigo) REFERENCES pes_pessoa (pes_codigo))' 
             
              this.connection.query(sql, (error) => {
                  if(error) {
                      console.log(error)
                  } else {
                      console.log('[Creating Responsavel Table]')
                  }
              })
    }

    // createDesaparecidos() {
    //     const sql = 'CREATE TABLE IF NOT EXISTS des_Desaparecidos (' 
    //           sql += 'des_codigo int(11) NOT NULL,'
    //           sql += 'des_encontrado datetime NOT NULL,'
    //           sql += 'pes_codigo` int(11) NOT NULL,'
    //           sql += 'vul_codigo` int(11) NOT NULL,'
    //           sql += 'CONSTRAINT fk_pesDesaparecido FOREIGN KEY (pes_codigo) REFERENCES pes_pessoas (pes_codigo),'
    //           sql += 'CONSTRAINT fk_vulDesaparecido FOREIGN KEY (vul_codigo) REFERENCES vul_vulneraveis (vul_codigo),'

    //           this.connection.query(sql, (error) => {
    //               if(error) {
    //                   console.log(error)
    //               } else {
    //                   console.log('[Creating Desaparecidos Table]')
    //               }
    //           })
    // }

    // createContact() {
    //     const sql = 'CREATE TABLE IF NOT EXISTS con_contatos (' 
    //           sql += 'con_codigo int(11) NOT NULL,' 
    //           sql += 'con_nome_contato varchar(20) CHARACTER SET utf8 NOT NULL'
    //           sql += 'con_tipo longtext NOT NULL,'
    //           sql += 'con_numero` longtext NOT NULL,'
    //           sql += 'res_codigo` int(11) NOT NULL,'
    //           sql += 'CONSTRAINT fk_resContacts FOREIGN KEY (res_codigo) REFERENCES res_responsavel (res_codigo))'

    //           this.connection.query(sql, (error) => {
    //               if(error) {
    //                   console.log(error)
    //               } else {
    //                   console.log('[Creating Contacts Table]')
    //               }
    //           })
    // }

    // createCases() {
    //     const sql = 'CREATE TABLE IF NOT EXISTS cas_casos (' 
    //           sql += 'cas_codigo int(11) NOT NULL,' 
    //           sql += 'cas_ultima_roupa varchar(100) CHARACTER SET utf8 DEFAULT NULL,'
    //           sql += 'cas_ultima_localizacao varchar(100) CHARACTER SET utf8 DEFAULT NULL,'
    //           sql += 'cas_ultimo_lugar varchar(100) CHARACTER SET utf8 DEFAULT NULL,'
    //           sql += 'cas_ultimo_horario varchar(100) CHARACTER SET utf8 DEFAULT NULL,'
    //           sql += 'des_codigo int(11) NOT NULL),'
    //           sql += 'CONSTRAINT fk_desCasos FOREIGN KEY (des_codigo) REFERENCES des_Desaparecidos (des_codigo))'

    //           this.connection.query(sql, (error) => {
    //               if(error) {
    //                   console.log(error)
    //               } else {
    //                   console.log('[Creating Cases Table]')
    //               }
    //           })
    // } 

    
}

module.exports = new Tables