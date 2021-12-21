//import sequalize
import {Sequelize} from "sequelize";

//database connection

const db = new Sequelize('mern_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;