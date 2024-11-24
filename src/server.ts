import app from './app';
import pool from './config/database'; // Importa a conexão com o banco de dados

const PORT = process.env.PORT || 3000; // (usa variável de ambiente, se disponível)

const startServer = async () => {
    try {
        // Testa a conexão com o banco de dados
        await pool.query('SELECT NOW()');

        // Inicia o servidor
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1); // Finaliza a aplicação se não conseguir conectar
    }
};

startServer();
