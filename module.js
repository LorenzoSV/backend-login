const func = require("./functions");

module.exports = {
  async postData(req, res){
    const {email, password} = req.body;

    await func.autheticateDataBase();
    await func.syncDataBase(email, password);

  }


};
