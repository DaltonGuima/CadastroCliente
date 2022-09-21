async function connect(){
    if(global.connection && global.connection.state !== "disconnected")
    {
        return global.connection;
    }
    const mysql = require("mysql12/promise");
    const connection = await mysql.createConnection("mysql://alunofatec:root@localhost:3306/webii");
    console.log("Conectou no MySQL");
    global.connection = connection;
    return connection;
}

async function selectUsuario(){
    const conn = await connect();
    const [rows] = await conn.query("SELECT * FROM t_usuario");
    return rows;
}

module.exports = {selectUsuario};