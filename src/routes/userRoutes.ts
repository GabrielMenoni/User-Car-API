import { getAllUsers, createUser, getUserByEmail, getUserById, deleteUserFromDB, updateUserFromDB } from "../controllers/usercontrollers";
import { Router, Request, Response } from "express";

const router = Router();

router.get('/', getAllUsers);

// Rota dinâmica que diferencia ID e e-mail
router.get('/:params', async (req: Request, res: Response): Promise<any> => {
    const { params } = req.params;

    // Verifica se é um número (ID)
    if (!isNaN(Number(params))) {
        try {
            return await getUserById(req, res); // Passa o ID ao controlador
        } catch (error) {
            return res.status(400).json({ error: 'Erro ao buscar usuário por ID' });
        }
    }

    // Verifica se é um e-mail
    if (params.includes('@')) {
        try {
            return await getUserByEmail(req, res); // Passa o e-mail ao controlador
        } catch (error) {
            return res.status(400).json({ error: 'Erro ao buscar usuário por e-mail' });
        }
    }

    // Caso não seja nem ID nem e-mail
    return res.status(400).json({ error: 'Parâmetro inválido' });
});

// Rota para criar usuários
router.post('/', createUser);

// Rota para atualizar usuários
router.put('/:params', async (req: Request, res: Response): Promise<any> => {
    const { params } = req.params;

    // Verifica se é um número (ID)
    if (!isNaN(Number(params))) {
        try {
            return await updateUserFromDB(req, res); // Passa o ID ao controlador
        } catch (error) {
            return res.status(400).json({ error: 'Erro ao atualizar usuário por ID' });
        }
    }

    return res.status(400).json({ error: 'Parâmetro inválido' });
});

// Rota para deletar usuários
router.delete('/:params', async (req: Request, res: Response): Promise<any> => {
    const { params } = req.params;

    // Verifica se é um número (ID)
    if (!isNaN(Number(params))) {
        try {
            return await deleteUserFromDB(req, res); // Passa o ID ao controlador
        } catch (error) {
            return res.status(400).json({ error: 'Erro ao deletar usuário por ID' });
        }
    }

    return res.status(400).json({ error: 'Parâmetro inválido' });
});

export default router;
