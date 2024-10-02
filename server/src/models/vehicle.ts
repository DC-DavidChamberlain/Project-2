import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user.js';

interface IVehicle {
id: number
vin: number | string;
make: string;
model: string;
year: number;
mileage: number;
color: string;
price: number;
}

interface VehicleCreationAttributes extends Optional<Vehicle, "id"> { }

export class Vehicle extends Model<IVehicle, VehicleCreationAttributes> implements IVehicle {
    public id!: number
    public vin!: number;
    public make!: string;
    public model!: string;
    public year!: number;
    public mileage!: number;
    public color!: string;
    public price!: number;

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
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
        },
        {
            tableName: "vehicles",
            sequelize,
        }
    );
    return Vehicle;
}