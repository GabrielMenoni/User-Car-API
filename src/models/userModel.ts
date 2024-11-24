import pool from "../config/database";

export const getUsers = async () => {
    const QUERY = `SELECT * FROM users`;
    const result = await pool.query(QUERY);
    return result.rows;
};

export const getUserById = async (id: number) => {
    const QUERY = `SELECT * FROM users WHERE userId = $1`;
    const params = [id];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}

export const getUserByEmail = async (email: string) => {
    const QUERY = `SELECT * FROM users WHERE email = $1`;
    const params = [email];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}

export const createUser = async (name: string, email: string) => {
    const QUERY = `INSERT INTO users (userName, email) VALUES ($1, $2) RETURNING *`;
    const params = [name, email];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}

export const updateUser = async (id: number, name: string, email: string) => {
    const QUERY = `UPDATE users SET userName = $1, email = $2 WHERE userId = $3 RETURNING *`;
    const params = [name, email, id];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}

export const deleteUser = async (id: number) => {
    const QUERY = `DELETE FROM users WHERE userId = $1 RETURNING *`;
    const params = [id];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}