import { Request, Response } from "express";
import { findAllUsers, addUser, findUserById, findUserByEmail, removeUser, updateUserById } from "../services/userService";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await findAllUsers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.params, 10);
        const user = await findUserById(id);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.params.params;
        const user = await findUserByEmail(email);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const user = await addUser(name, email);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUserFromDB = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.params, 10);
        const { name, email } = req.body;
        const updatedUser = await updateUserById(id, name, email);
        res.status(200).json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUserFromDB = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.params, 10);
        const removedUser = await removeUser(id);
        res.status(200).json(removedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}