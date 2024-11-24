import { Request, Response } from "express";
import { findAllCars, addCar, findCarById, removeCar, updateCarById } from "../services/carService";

export const getAllCars = async (req: Request, res: Response) => {
    try {
        const cars = await findAllCars();
        res.status(200).json(cars);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getCarById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const car = await findCarById(id);
        res.status(200).json(car);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const createCar = async (req: Request, res: Response) => {
    try {
        const { model, fabricationYear, carOwner } = req.body;
        const car = await addCar(model, fabricationYear, carOwner);
        res.status(201).json(car);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const updateCarFromDB = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { model, fabricationYear, carOwner } = req.body;
        const updatedCar = await updateCarById(id, model, fabricationYear, carOwner);
        res.status(200).json(updatedCar);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteCarFromDB = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const removedCar = await removeCar(id);
        res.status(200).json(removedCar);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}