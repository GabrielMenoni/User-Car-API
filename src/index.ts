import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

//Rota Inicial
app.get('/', (req: Request, res: Response) => {
    res.send("Backend rodando com node + typescript");
})

app.post('/', (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.send(`O ${name} tem o Email: ${email}`);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})