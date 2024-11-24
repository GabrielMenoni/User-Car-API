import express from 'express';
import userRoutes from './routes/userRoutes';
import carRoutes from './routes/carRoutes';

const app = express();
app.use(express.json());

// Rotas usuários
app.use('/users', userRoutes);

// Rotas carros
app.use('/cars', carRoutes);

// Rota Teste
app.get('/ping', (req, res) => {
    res.json({ message: 'pong :P' });
});

export default app;