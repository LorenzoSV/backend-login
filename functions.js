const user = require("./user");
const sequelize = require("./sequelize")
module.exports = {
    async autheticateDataBase() {
        try {
          await sequelize.authenticate();
          console.log("Banco de dados autenticado com sucesso");
          next();
        } catch (err) {
          console.log("este é o erro ao tentar acessar o banco de dados:", err);
        }
      },
    
    
      async  syncDataBase(email, password) {
        try {
          await sequelize.sync();
          console.log("Banco sincronizado com sucesso");
          next();
        } catch (err) {
          console.log("erro ao sincronizar o banco de dados: ", err);
        }
            this.createUser();
        
      },
    
    
      async createUser(email, password) {
        try {
          const newUser = user.create({email, password});
          console.log(newUser.toJSON());
          next();
        } catch (err) {
          console.log("erro ao criar registro no banco");
        }
      }
    
    
    
}

