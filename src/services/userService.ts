import { getUsers, getUserById, getUserByEmail, createUser, deleteUser, updateUser } from "../models/userModel";

export const findAllUsers = async () => {
    return await getUsers();
};

export const findUserById = async (id: number) => {
    const user = await getUserById(id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
    }
    return user;
}

export const findUserByEmail = async (email: string) => {
    const user = await getUserByEmail(email);
    if (!user) {
        throw new Error(`User with email ${email} not found`);
    }
    return user;
}

export const addUser = async (name: string, email: string) => {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        throw new Error(`User with email ${email} already exists`);
    }
    return await createUser(name, email);
}

export const updateUserById = async (id: number, name: string | undefined, email: string | undefined) => {
    const user = await getUserById(id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
    }

    if (!name) {
        name = user.username;
    }

    if (!email) {
        email = user.email;
    }

    return await updateUser(id, name!, email!);
}

export const removeUser = async (id: number) => {
    const user = await getUserById(id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
    }
    return await deleteUser(id);
}