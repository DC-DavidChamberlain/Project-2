import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { User } from "./user.js";

interface IVehicle {
  id: number;
  vin: number | string;
  make: string;
  model: string;
  year: number;
  gallonsOfGas: number;
  distance: number;
  mileage: number;
  color: string;
  price: number;
  tires?: string | number;
  tiresCondition?: string;
}

interface VehicleCreationAttributes extends Optional<IVehicle, "id"> {}

export class Vehicle
  extends Model<IVehicle, VehicleCreationAttributes>
  implements IVehicle
{
  public id!: number;
  public vin!: number | string;
  public make!: string;
  public model!: string;
  public year!: number;
  public gallonsOfGas!: number;
  public distance!: number;
  public mileage!: number;
  public color!: string;
  public price!: number;
  public tires!: number | string;
  public tiresCondition!: string;

  public readonly assignedUser?: User;
}

export function VehicleFactory(sequelize: Sequelize): typeof Vehicle {
  Vehicle.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      vin: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      make: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gallonsOfGas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tires: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tiresCondition: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "vehicles",
      sequelize,
      timestamps: false,
    },
  );
  return Vehicle;
}
