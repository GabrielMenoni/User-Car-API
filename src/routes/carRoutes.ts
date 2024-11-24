import { Router, Request, Response } from "express";
import { getAllCars, createCar, deleteCarFromDB, getCarById, updateCarFromDB } from "../controllers/carControllers";

const router = Router();

router.get("/", getAllCars);
router.get("/:id", getCarById);
router.post("/", createCar);
router.put("/:id", updateCarFromDB);
router.delete("/:id", deleteCarFromDB);

export default router;