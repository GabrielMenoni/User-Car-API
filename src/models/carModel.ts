import pool from "../config/database";

export const getCars = async () => {
    const QUERY = `
        SELECT 
            car.carId, 
            car.model, 
            car.fabricationYear, 
            users.userId, 
            users.userName, 
            users.email
        FROM car
        INNER JOIN users ON car.carOwner = users.userId
    `;
    const result = await pool.query(QUERY);
    return result.rows;
}

export const getCarById = async (id: number) => {
    const QUERY = `
        SELECT 
            car.carId, 
            car.model, 
            car.fabricationYear, 
            users.userId, 
            users.userName, 
            users.email
        FROM car
        INNER JOIN users ON car.carOwner = users.userId
        WHERE car.carId = $1
    `;
    const params = [id];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}

export const createCar = async (model: string, fabricationYear: string, carOwner: number) => {
    const QUERY = `INSERT INTO car (model, fabricationYear, carOwner) VALUES ($1, $2, $3) RETURNING *`;
    const params = [model, fabricationYear, carOwner];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}

export const updateCar = async (id: number, model: string, fabricationYear: string, carOwner: number) => {
    const QUERY = `UPDATE car SET model = $1, fabricationYear = $2, carOwner = $3 WHERE carId = $4 RETURNING *`;
    const params = [model, fabricationYear, carOwner, id];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}

export const deleteCar = async (id: number) => {
    const QUERY = `DELETE FROM car WHERE carId = $1 RETURNING *`;
    const params = [id];
    const result = await pool.query(QUERY, params);
    return result.rows[0];
}