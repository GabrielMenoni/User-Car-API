import { getCars, createCar, deleteCar, getCarById, updateCar } from "../models/carModel";

export const findAllCars = async () => {
    return await getCars();
}

export const findCarById = async (id: number) => {
    const car = await getCarById(id);
    if (!car) {
        throw new Error(`Car with id ${id} not found`);
    }
    return car;
}

export const addCar = async (model: string, fabricationYear: string, carOwner: number) => {
    return await createCar(model, fabricationYear, carOwner);
}

export const updateCarById = async (id: number, model: string | undefined, fabricationYear: string | undefined, carOwner: number | undefined) => {
    const car = await getCarById(id);
    if (!car) {
        throw new Error(`Car with id ${id} not found`);
    }

    if (!model) {
        model = car.model;
    }

    if (!fabricationYear) {
        fabricationYear = car.fabricationyear;
    }

    if (!carOwner) {
        carOwner = car.userid;
    }

    return await updateCar(id, model!, fabricationYear!, carOwner!);
}

export const removeCar = async (id: number) => {
    const car = await getCarById(id);
    if (!car) {
        throw new Error(`Car with id ${id} not found`);
    }
    return await deleteCar(id);
}