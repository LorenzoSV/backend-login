const express = require("express");
const cors = require("cors");
const postData = require("./module");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const user = require("./user");
/*async function autheticateDataBase() {
  try {
    await sequelize.authenticate();
    console.log("conexão do banco de dados realizada com sucesso");
  } catch (error) {
    console.log("Erro ao conectar com o banco de dados:", error);
  }
}*/

//autheticateDataBase();

/*async function databaseSync() {
  try {
    await sequelize.sync();
    console.log("Banco sync com sucesso!!");
  } catch (error) {
    console.log("Erro no Banco sync!!");
  } finally {
    async function createUser(email, password) {
      try {
        const user = await User.create({ email, password });
        console.log(user.toJSON());
      } catch (err) {
        console.log("erro ao criar registro na tabela");
      }
    }

    createUser("otheruser@gmail.com", "tode");
  }
}*/

//databaseSync();

/*sequelize.sync().then(() => {
  async function createUser(email, password) {
    const user = await User.create({ email, password });
    console.log(user.toJSON());
  }

  createUser("user@example.com", "s3cr3t");
});*/

// Habilita o CORS

// Rota GET para a página inicial
router.get("/users", async (req, res) => {
  const users = await user.findAll();
  res.json(users);
});

router.post("/users", postData.postData);

// Rota GET para a página sobre
router.get("/sobre", (req, res) => {
  res.send("Sobre nós!");
});

// Monta as rotas no aplicativo
app.use(router);

// Inicia o servidor
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
});
