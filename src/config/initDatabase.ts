import pool from "./database";

const createTables = async () => {
    try {
        // Criação da tabela users
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                userId INT GENERATED ALWAYS AS IDENTITY,
                userName VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                PRIMARY KEY(userId)
            );
        `);

        // Criação da tabela car
        await pool.query(`
            CREATE TABLE IF NOT EXISTS car (
                carId INT GENERATED ALWAYS AS IDENTITY,
                model VARCHAR(100) NOT NULL,
                fabricationYear VARCHAR(100) NOT NULL,
                carOwner INT NOT NULL,
                PRIMARY KEY(carId),
                FOREIGN KEY(carOwner) REFERENCES users(userId)
            );
        `);

        console.log('Tabelas criadas com sucesso!');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    } finally {
        pool.end(); // Fecha a conexão após executar as queries
    }
};

createTables();