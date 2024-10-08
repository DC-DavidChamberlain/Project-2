import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
//import { handleErrors } from "../utils/errorHandler";

const prisma = new PrismaClient();

export const getUserVehicles = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const vehicles = await prisma.vehicle.findMany({
      where: { userId: parseInt(userId) },
    });
    res.json(vehicles);
  } catch (error) {
    // handleErrors(res, error);
  }
};

export const createUserVehicle = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const {
      vin,
      make,
      model,
      year,
      typeOfGas,
      gallonsOfGas,
      distance,
      mileage,
      color,
      price,
      tires,
      tiresCondition,
    } = req.body;
    const newVehicle = await prisma.vehicle.create({
      data: {
        userId: parseInt(userId),
        vin,
        make,
        model,
        year,
        typeOfGas,
        gallonsOfGas,
        distance,
        mileage,
        color,
        price,
        tires,
        tiresCondition,
      },
    });
    res.status(201).json(newVehicle);
  } catch (error) {
    // handleErrors(res, error);
  }
};

export const updateUserVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { make, model, year, licensePlate } = req.body;
    const updatedVehicle = await prisma.vehicle.update({
      where: { id: parseInt(id) },
      data: { make, model, year, licensePlate },
    });
    res.json(updatedVehicle);
  } catch (error) {
    // handleErrors(res, error);
  }
};

export const deleteUserVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.vehicle.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    // handleErrors(res, error);
  }
};
