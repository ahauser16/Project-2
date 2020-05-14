require("dotenv").config();
module.exports = {
  
  local: {
    username: 'root',
    password: null,
    database: 'timbr_db',
    host: '127.0.0.1',
    dialect: 'mysql'
    },
  
  development: {
    username: "root",
    password: process.env.MYSQLPASS,
    database: "timbr_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "timbr_db",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    username: "",
    password: null,
    database: "timbr_db",
    host: "127.0.0.1",
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
