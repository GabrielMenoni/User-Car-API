import { Pool } from "pg";

/*
    skeleton:

    const pool = new Pool({
    user: "your_user",
    host: "localhost",
    database: "database_name",
    password: "your_password",
    port: 5432
})
*/

pool.on('connect', () => {
    console.log('Conectado ao banco de dados com sucesso!');
});

pool.on('error', (err) => {
    console.error('Erro na conexão com o banco de dados:', err);
    process.exit(-1);
});

export default pool;